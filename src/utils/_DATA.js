
let users = {
    ikechukwu: {
      id: 'ikechukwu',
      name: 'Ikechukwu',
      avatarURL: '/images/avatars/dog.png',
      answers: {
        '8xf0y6ziyjabvozdd253nd': 'optionOne',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
        am8ehyc8byjqgar0jgpub9: 'optionTwo',
        loxhs1bqm25b708cmbf3g: 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    james: {
      id: 'james',
      name: 'James',
      avatarURL: '/images/avatars/cat.png',
      answers: {
        vthrdm985a262al8qx3do: 'optionOne',
        xj352vofupe1dqz9emx13r: 'optionTwo'
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
    },
    marylene: {
      id: 'marylene',
      name: 'Marylene',
      avatarURL: '/images/avatars/lion.png',
      answers: {
        xj352vofupe1dqz9emx13r: 'optionOne',
        vthrdm985a262al8qx3do: 'optionTwo',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
    },
    macanthony: {
      id: 'macanthony',
      name: 'MacAnthony',
      avatarURL: '/images/avatars/gorilla.png',
      answers: {},
      questions: []
    },
    ihuoma: {
      id: 'ihuoma',
      name: 'Ihuoma',
      avatarURL: '/images/avatars/koala.png',
      answers: {},
      questions: []
    },
    precious: {
      id: 'precious',
      name: 'Precious',
      avatarURL: '/images/avatars/rabbit.png',
      answers: {},
      questions: []
    },
    kevin: {
      id: 'kevin',
      name: 'Kevin',
      avatarURL: '/images/avatars/tiger.png',
      answers: {},
      questions: []
    },
    jeremiah: {
      id: 'jeremiah',
      name: 'Jeremiah',
      avatarURL: '/images/avatars/fox.png',
      answers: {},
      questions: []
    }
  };
  
  let questions = {
    '8xf0y6ziyjabvozdd253nd': {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'ikechukwu',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['ikechukwu'],
        text: 'have horrible short term memory'
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    '6ni6ok3ym7mf1p33lnez': {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'marylene',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero'
      },
      optionTwo: {
        votes: ['marylene', 'ikechukwu'],
        text: 'become a supervillain'
      }
    },
    am8ehyc8byjqgar0jgpub9: {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'ikechukwu',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic'
      },
      optionTwo: {
        votes: ['ikechukwu'],
        text: 'be telepathic'
      }
    },
    loxhs1bqm25b708cmbf3g: {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'james',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer'
      },
      optionTwo: {
        votes: ['ikechukwu'],
        text: 'be a back-end developer'
      }
    },
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'james',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['james'],
        text: 'find $50 yourself'
      },
      optionTwo: {
        votes: ['marylene'],
        text: 'have your best friend find $500'
      }
    },
    xj352vofupe1dqz9emx13r: {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'marylene',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['marylene'],
        text: 'write JavaScript'
      },
      optionTwo: {
        votes: ['james'],
        text: 'write Swift'
      }
    }
  };
  
  function generateUID() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }
  
  export function _getUsers() {
    return new Promise((res, rej) => {
      setTimeout(() => res({ ...users }), 1000);
    });
  }
  
  export function _getQuestions() {
    return new Promise((res, rej) => {
      setTimeout(() => res({ ...questions }), 1000);
    });
  }
  
  function formatQuestion({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText
      },
      optionTwo: {
        votes: [],
        text: optionTwoText
      }
    };
  }
  
  export function _saveQuestion(question) {
    return new Promise((res, rej) => {
      const authUser = question.author;
      const formattedQuestion = formatQuestion(question);
  
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        };
  
        users = {
          ...users,
          [authUser]: {
            ...users[authUser],
            questions: users[authUser].questions.concat([formattedQuestion.id])
          }
        };
  
        res(formattedQuestion);
      }, 1000);
    });
  }
  
  export function _saveQuestionAnswer({ authUser, qid, answer }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        users = {
          ...users,
          [authUser]: {
            ...users[authUser],
            answers: {
              ...users[authUser].answers,
              [qid]: answer
            }
          }
        };
  
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authUser])
            }
          }
        };
  
        res();
      }, 500);
    });
  }
  