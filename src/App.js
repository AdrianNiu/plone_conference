import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";
import Faq from "./components/Faq";
import api from "./middleware/api";

import "./App.css";

const store = createStore(rootReducer, applyMiddleware(api));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Faq />
      </Provider>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// import rootReducer from "./reducers";
// import Faq from "./components/Faq";

// import "./App.css";

// const store = createStore(rootReducer);

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Faq />
//       </Provider>
//     );
//   }
// }

// export default App;

///////////////////////////////////////////////////////////////////////////

// import React, { Component } from "react";
// import FaqItem from "./components/FaqItem";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       faq: [
//         {
//           question: "What does the Plone Foundation do?",
//           answer:
//             "The mission of the Plone Foundation is to protect and promote Plone. The Foundation provides marketing assistance, awareness, and evangelism assistance to the Plone community. The Foundation also assists with development funding and coordination of funding for large feature implementations. In this way, our role is similar to the role of the Apache Software Foundation and its relationship with the Apache Project."
//         },
//         {
//           question: "Why does Plone need a Foundation?",
//           answer:
//             "Plone has reached critical mass, with enterprise implementations and worldwide usage. The Foundation is able to speak for Plone, and provide strong and consistent advocacy for both the project and the community. The Plone Foundation also helps ensure a level playing field, to preserve what is good about Plone as new participants arrive."
//         }
//       ],
//       question: "",
//       answer: ""
//     };
//   }

//   onDelete = (index) => {
//     let faq = this.state.faq;
//     faq.splice(index, 1);
//     this.setState({
//       faq
//     });
//   }

//   onEdit = (index, question, answer) => {
//     let faq = this.state.faq;
//     faq[index] = {
//       question,
//       answer
//     };
//     this.setState({
//       faq
//     });
//   }

//   onChangeQuestion = (event) => {
//     this.setState({
//       question: event.target.value
//     });
//   }

//   onChangeAnswer = (event) => {
//     this.setState({
//       answer: event.target.value
//     });
//   }

//   onSubmit = (event) => {
//     this.setState({
//       faq: [
//         ...this.state.faq,
//         {
//           question: this.state.question,
//           answer: this.state.answer
//         }
//       ],
//       question: "",
//       answer: ""
//     });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.faq.map((item, index) => (
//             <FaqItem
//               question={item.question}
//               answer={item.answer}
//               index={index}
//               onDelete={this.onDelete}
//               onEdit={this.onEdit}
//             />
//           ))}
//         </ul>
//         <form onSubmit={this.onSubmit}>
//           <label>
//             Question:
//             <input
//               name="question"
//               type="text"
//               value={this.state.question}
//               onChange={this.onChangeQuestion}
//             />
//           </label>
//           <label>
//             Answer:
//             <textarea
//               name="answer"
//               value={this.state.answer}
//               onChange={this.onChangeAnswer}
//             />
//           </label>
//           <input type="submit" value="Add" />
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from "react";
// import FaqItem from "./components/FaqItem";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       faq: [
//         {
//           question: "What does the Plone Foundation do?",
//           answer:
//             "The mission of the Plone Foundation is to protect and promote Plone. The Foundation provides marketing assistance, awareness, and evangelism assistance to the Plone community. The Foundation also assists with development funding and coordination of funding for large feature implementations. In this way, our role is similar to the role of the Apache Software Foundation and its relationship with the Apache Project."
//         },
//         {
//           question: "Why does Plone need a Foundation?",
//           answer:
//             "Plone has reached critical mass, with enterprise implementations and worldwide usage. The Foundation is able to speak for Plone, and provide strong and consistent advocacy for both the project and the community. The Plone Foundation also helps ensure a level playing field, to preserve what is good about Plone as new participants arrive."
//         }
//       ],
//       question: "",
//       answer: ""
//     };
//   }

//   onDelete = (index) => {
//     let faq = this.state.faq;
//     faq.splice(index, 1);
//     this.setState({
//       faq
//     });
//   }

//   onChangeQuestion = (event) => {
//     this.setState({
//       question: event.target.value
//     });
//   }

//   onChangeAnswer = (event) => {
//     this.setState({
//       answer: event.target.value
//     });
//   }

//   onSubmit = (event) => {
//   this.setState({
//     faq: [
//       ...this.state.faq,
//       {
//         question: this.state.question,
//         answer: this.state.answer
//       }
//     ],
//     question: "",
//     answer: ""
//   });
//   event.preventDefault();
// }

//   render() {
//   return (
//     <div>
//       <ul>
//         {this.state.faq.map((item, index) => (
//           <FaqItem
//             question={item.question}
//             answer={item.answer}
//             index={index}
//             onDelete={this.onDelete}
//           />
//         ))}
//       </ul>
//       <form onSubmit={this.onSubmit}>
//         <label>
//           Question:
//           <input
//             name="question"
//             type="text"
//             value={this.state.question}
//             onChange={this.onChangeQuestion}
//           />
//         </label>
//         <label>
//           Answer:
//           <textarea
//             name="answer"
//             value={this.state.answer}
//             onChange={this.onChangeAnswer}
//           />
//         </label>
//         <input type="submit" value="Add" />
//       </form>
//     </div>
//   );
// }
// }

// export default App;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import logo from './logo.svg';
// import FaqItem from "./components/FaqItem";
// import './App.css';

// function App() {
//   return (
    
//     <div className="App">
//       <FaqItem
//           question="What does the Plone Foundation do?"
//           answer="
//             The mission of the Plone Foundation is to protect and promote Plone.
//             The Foundation provides marketing assistance, awareness, and
//             evangelism assistance to the Plone community. The Foundation also
//             assists with development funding and coordination of funding for
//             large feature implementations. In this way, our role is similar to
//             the role of the Apache Software Foundation and its relationship with
//             the Apache Project."
//         />
//         <FaqItem
//           question="Why does Plone need a Foundation?"
//           answer="
//             Plone has reached critical mass, with enterprise implementations and
//             worldwide usage. The Foundation is able to speak for Plone, and
//             provide strong and consistent advocacy for both the project and the
//             community. The Plone Foundation also helps ensure a level playing
//             field, to preserve what is good about Plone as new participants
//             arrive."
//         />
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
