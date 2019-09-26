import React, { Component } from "react";
const Hoc = () => Component => {
  class HocComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        flexConfigForHome: {
          items: [
            {
              type: "Card",
              props: {
                label: "Good work labs",
                horozintalAlign: "left"
              }
            },
            {
              type: "Header",
              props: {
                label: "Technology",
                horozintalAlign: "left"
              }
            },
            {
              type: "Card",
              props: {
                color: "grey"
              },
              children: {
                items: [
                  {
                    type: "Cards",
                    props: {
                      cards: [
                        {
                          label: "Java",
                          horizontalAlign: "center",
                          verticalAlign: "center",
                          color: "orange"
                        },
                        {
                          label: "React",
                          horizontalAlign: "center",
                          verticalAlign: "center",
                          color: "blue"
                        },
                        {
                          label: "Node",
                          horizontalAlign: "center",
                          verticalAlign: "center",
                          color: "pink"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              type: "Header",
              props: {
                label: "Drop Message",
                horozintalAlign: "left"
              }
            },
            {
              type: "Card",
              props: {
                color: "grey",
                horizontalAlign: "center",
                verticalAlign: "center"
              },
              children: {
                items: [
                  {
                    type: "TexField",
                    props: {
                      inputType: "text",
                      label: "Name",
                      name: "name"
                    }
                  },
                  {
                    type: "TexField",
                    props: {
                      inputType: "email",
                      label: "Email",
                      name: "email"
                    }
                  },
                  {
                    type: "TexField",
                    props: {
                      inputType: "number",
                      label: "Mobile",
                      name: "Message"
                    }
                  },
                  {
                    type: "Button",
                    props: {
                      label: "Submit"
                    }
                  }
                ]
              }
            }
          ]
        },
        flexConfigForRegistration: {
          items: [
            {
              type: "Header",
              props: {
                label: "Registration",
                horozintalAlign: "center",
                verticalAlign: "center"
              }
            },
            {
              type: "Card",
              props: {
                color: "grey",
                horozintalAlign: "left"
              },
              children: {
                items: [
                  {
                    type: "TexField",
                    props: {
                      inputType: "text",
                      label: "Name",
                      name: "name"
                    }
                  },
                  {
                    type: "TexField",
                    props: {
                      inputType: "email",
                      label: "Email",
                      name: "email"
                    }
                  },
                  {
                    type: "TexField",
                    props: {
                      inputType: "number",
                      label: "Mobile",
                      name: "Message"
                    }
                  },
                  {
                    type: "RadioGruop",
                    props: {
                      label: "Gender",
                      name: "gender",
                      options: [
                        {
                          label: "Male"
                        },
                        {
                          label: "Female"
                        }
                      ]
                    }
                  },
                  {
                    type: "TexField",
                    props: {
                      inputType: "password",
                      label: "Password",
                      name: "password"
                    }
                  },
                  {
                    type: "TexField",
                    props: {
                      inputType: "password",
                      label: "Confirm Password",
                      name: "confirmPassword"
                    }
                  },
                  {
                    type: "Button",
                    props: {
                      label: "Register"
                    }
                  }
                ]
              }
            }
          ]
        }
      };
    }

    render() {
      const { flexConfigForHome, flexConfigForRegistration } = this.state;

      return (
        <div>
          <Component
            home={flexConfigForHome}
            register={flexConfigForRegistration}
            {...this.props}
          />
        </div>
      );
    }
  }
  return HocComponent;
};
export default Hoc;
