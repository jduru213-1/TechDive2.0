import { useState } from 'react';

const Quiz = () => {
  const questions = [
    { question: 'Do you enjoy analyzing data and logs to find potential security threats?', scoreKey: 'analyze' },
    { question: 'Do you like breaking into systems to find vulnerabilities?', scoreKey: 'break' },
    { question: 'Do you prefer following procedures and ensuring compliance?', scoreKey: 'follow' },
    { question: 'Are you interested in designing and implementing security solutions?', scoreKey: 'design' },
    { question: 'Do you enjoy troubleshooting and resolving technical issues?', scoreKey: 'troubleshoot' },
    { question: 'Are you excited by the idea of creating and managing security policies?', scoreKey: 'manage' },
    { question: 'Do you like conducting security audits and assessments?', scoreKey: 'audit' },
    { question: 'Do you prefer working with large data sets and performing detailed analysis?', scoreKey: 'data' },
    { question: 'Are you interested in researching new and emerging cybersecurity threats?', scoreKey: 'research' },
    { question: 'Do you enjoy collaborating with teams to improve security posture?', scoreKey: 'collaborate' },
    { question: 'Are you fascinated by reverse engineering and dissecting malware?', scoreKey: 'reverse-engineer' },
    { question: 'Do you prefer roles that involve frequent communication with stakeholders?', scoreKey: 'communication' },
    { question: 'Are you interested in automating security processes and workflows?', scoreKey: 'automation' },
    { question: 'Do you enjoy managing security operations and incident response?', scoreKey: 'operations' },
    { question: 'Are you enthusiastic about compliance with industry standards and regulations?', scoreKey: 'compliance' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    analyze: 0, break: 0, follow: 0, design: 0, troubleshoot: 0,
    manage: 0, audit: 0, data: 0, research: 0, collaborate: 0,
    'reverse-engineer': 0, communication: 0, automation: 0, operations: 0, compliance: 0
  });
  const [result, setResult] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const updatedScores = { ...scores };

    if (answer === 'yes') {
      updatedScores[currentQuestion.scoreKey]++;
    }

    setScores(updatedScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const career = getCareerRecommendation(updatedScores);
      setResult(career);
    }
  };

  const getCareerRecommendation = (finalScores) => {
    const maxScore = Math.max(...Object.values(finalScores));
    const topScores = Object.keys(finalScores).filter(key => finalScores[key] === maxScore);

    const careerMap = {
      analyze: 'Security Analyst',
      break: 'Penetration Tester',
      follow: 'Governance, Risk, and Compliance Specialist',
      design: 'Security Engineer',
      troubleshoot: 'Security Operations Center Analyst',
      manage: 'Security Manager',
      audit: 'Security Auditor',
      data: 'Data Protection Officer',
      research: 'Threat Intelligence Analyst',
      collaborate: 'Security Consultant',
      'reverse-engineer': 'Malware Analyst',
      communication: 'Security Liaison',
      automation: 'Security Automation Engineer',
      operations: 'Incident Responder',
      compliance: 'Compliance Specialist'
    };

    return careerMap[topScores[0]] || 'Cybersecurity Generalist';
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScores({
      analyze: 0, break: 0, follow: 0, design: 0, troubleshoot: 0,
      manage: 0, audit: 0, data: 0, research: 0, collaborate: 0,
      'reverse-engineer': 0, communication: 0, automation: 0, operations: 0, compliance: 0
    });
    setResult(null);
    setQuizStarted(false);
  };

  return (
    <div>
      {!quizStarted ? (
        <div>
<button
  onClick={() => setQuizStarted(true)}
  className="text-black rounded-full px-6 py-2 bg-white hover:animate-fadeAndZoom cursor-pointer text-lg">Begin Questionaire!
</button>
        </div>
      ) : result ? (
        <div>
          <h2 style={{ color: 'white' }}>Your Recommended Career:</h2>
          <p style={{ color: 'white' }}>{result}</p>
        <button onClick={resetQuiz} className="text-white border-2 border-black rounded-full mt-5 px-8 py-2 bg-black hover:bg-gray-800 cursor-pointer">
            Retake Quiz
        </button>
        </div>
      ) : (
        <div>
          <p style={{ color: 'white' }}>{questions[currentQuestionIndex].question}</p>
          <div style={{ marginTop: '10px' }}>
          <button onClick={() => handleAnswer('yes')}className="text-black rounded-full px-6 py-2 bg-white hover:animate-fadeAndZoom cursor-pointer text-lg">
             Yes
        </button>
        <button onClick={() => handleAnswer('no')}className="text-black  rounded-full px-6 py-2 bg-white hover:animate-fadeAndZoom cursor-pointer text-lg">
            No
        </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
