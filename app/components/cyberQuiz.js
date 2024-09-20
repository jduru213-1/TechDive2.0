import { useState } from 'react';

const Quiz = () => {
  const questions = [
    { question: 'Would you enjoy analyzing data and logs to find potential security threats?', scoreKey: 'analyze' },
    { question: 'Would you like breaking into systems to find vulnerabilities?', scoreKey: 'break' },
    { question: 'Would you prefer following procedures and ensuring compliance?', scoreKey: 'follow' },
    { question: 'Would you be interested in designing and implementing security solutions?', scoreKey: 'design' },
    { question: 'Would you enjoy troubleshooting and resolving technical issues?', scoreKey: 'troubleshoot' },
    { question: 'Would you be excited by the idea of creating and managing security policies?', scoreKey: 'manage' },
    { question: 'Would you like conducting security audits and assessments?', scoreKey: 'audit' },
    { question: 'Would you prefer working with large data sets and performing detailed analysis?', scoreKey: 'data' },
    { question: 'Would you be interested in researching new and emerging cybersecurity threats?', scoreKey: 'research' },
    { question: 'Would you enjoy collaborating with teams to improve security posture?', scoreKey: 'collaborate' },
    { question: 'Would you be fascinated by reverse engineering and dissecting malware?', scoreKey: 'reverseengineer' },
    { question: 'Would you prefer roles that involve frequent communication with stakeholders?', scoreKey: 'communication' },
    { question: 'Would you be interested in automating security processes and workflows?', scoreKey: 'automation' },
    { question: 'Would you enjoy managing security operations and incident response?', scoreKey: 'operations' },
    { question: 'Would you be enthusiastic about compliance with industry standards and regulations?', scoreKey: 'compliance' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    analyze: 0, break: 0, follow: 0, design: 0, troubleshoot: 0,
    manage: 0, audit: 0, data: 0, research: 0, collaborate: 0,
    reverseengineer: 0, communication: 0, automation: 0, operations: 0, compliance: 0
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
      reverseengineer: 'Malware Analyst',
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
      reverseengineer: 0, communication: 0, automation: 0, operations: 0, compliance: 0
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
            className="text-black rounded-full px-6 py-2 bg-white hover:animate-fadeAndZoom cursor-pointer text-lg"
          >
            Begin Questionnaire!
          </button>
        </div>
      ) : result ? (
        <div>
          <h2 style={{ color: 'white' }}>Your Recommended Career:</h2>
          <p style={{ color: 'white' }}>{result}</p>
          <button
            onClick={resetQuiz}
            className="text-black rounded-full mt-5 px-6 py-2 bg-white hover:animate-fadeAndZoom cursor-pointer text-lg">       
                 Retake Quiz
          </button>
        </div>
      ) : (
        <div>
          <p style={{ color: 'white' }}>{questions[currentQuestionIndex].question}</p>
          <div style={{ marginTop: '10px' }}>
            <button
              onClick={() => handleAnswer('yes')}
              className="text-black rounded-full px-6 py-4 bg-white hover:animate-fadeAndZoom cursor-pointer text-lg"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer('no')}
              className="text-black rounded-full px-6 py-4 bg-white hover:animate-fadeAndZoom cursor-pointer text-lg"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
