import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FaqItem from "./FaqItem";
import { addFaqItem, getFaqItems } from "../actions";

class Faq extends Component {
  static propTypes = {
    faq: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
      })
    ),
    addFaqItem: PropTypes.func.isRequired,
    getFaqItems: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  componentDidMount() {
    this.props.getFaqItems();
  }

  onChangeQuestion = (event) => {
    this.setState({
      question: event.target.value
    });
  }

  onChangeAnswer = (event) => {
    this.setState({
      answer: event.target.value
    });
  }

  onSubmit = (event) => {
    this.props.addFaqItem(this.state.question, this.state.answer);
    this.setState({
      question: "",
      answer: ""
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.faq.map((item, index) => (
            <FaqItem
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </ul>
        <form onSubmit={this.onSubmit}>
          <label>
            Question:
            <input
              name="question"
              type="text"
              value={this.state.question}
              onChange={this.onChangeQuestion}
            />
          </label>
          <label>
            Answer:
            <textarea
              name="answer"
              value={this.state.answer}
              onChange={this.onChangeAnswer}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    faq: state.faq
  }),
  { addFaqItem, getFaqItems }
)(Faq);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// import FaqItem from "./FaqItem";
// import { addFaqItem } from "../actions";

// class Faq extends Component {
//   static propTypes = {
//     faq: PropTypes.arrayOf(
//       PropTypes.shape({
//         question: PropTypes.string.isRequired,
//         answer: PropTypes.string.isRequired
//       })
//     ),
//     addFaqItem: PropTypes.func.isRequired
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       question: "",
//       answer: ""
//     };
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
//     this.props.addFaqItem(this.state.question, this.state.answer);
//     this.setState({
//       question: "",
//       answer: ""
//     });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.faq.map((item, index) => (
//             <FaqItem
//               question={item.question}
//               answer={item.answer}
//               index={index}
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

// export default connect(
//   (state, props) => ({
//     faq: state.faq
//   }),
//   { addFaqItem }
// )(Faq);


/////////////////////////////////////////////////////////////////////////////////////



// import React, { Component } from "react";
// import FaqItem from "./FaqItem";


// class Faq extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       faq: [
//         {
//           question: "What does the Plone Foundation do?",
//           answer:
//             "The mission of the Plone Foundation is to protect and..."
//         },
//         {
//           question: "Why does Plone need a Foundation?",
//           answer:
//             "Plone has reached critical mass, with enterprise..."
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

// export default Faq;