import React, { useState } from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CreateIcon from "@material-ui/icons/Create";
import NavBarContainer from "../../components/navbar/navbar_container";
import MenuBar from "./menu_bar";
//IntroContainer
//PostContainer
//FriendsContainer

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
      this.props.getUser(this.props.match.params.userId)
        .then(() => this.setState(this.props.user));
  }

  render() {
    return (

      <div>
        {/* {NavbarContainer} */}
        <div className="profile-header-container">
          <div className="cover-photo-container">
            <img src={this.props.user?.coverPhoto} className="cover-photo" />
          </div>
          <div className="profile-pic-container">
            <img src={this.props.user?.profilePic} className="profile-pic" />
          </div>
          <div
            className="profile-name-container"
            style={{
              width: "100%",
              display: "block",
              maxWidth: "1000px",
              margin: "0px auto",
            }}
          >
            <p className="profile-name">
              {this.props.user?.first_name + " " + this.props.user?.last_name}
            </p>
            <div className="menu-bar">
              <MenuBar />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <div style={{width: "100%", maxWidth: 500}}>
                <div style={{marginTop: "24px"}}>
                  <IntroBox />
                </div>
                <div
                  style={{
                    padding: "12px",
                    marginTop: "12px",
                    backgroundColor: "gray",
                    borderRadius: "5px",
                  }}
                >
                  friends box
                </div>
              </div>
              <div
                style={{
                  width: "115%",
                  backgroundColor: "white",
                  marginLeft: "12px",
                  padding: "12px",
                  boxShadow: "rgb(0 0 0 / 75%) 0px 5px 8px -9px",
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                  marginTop: "23px",
                }}
              >
                posts/comments 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

function IntroBox() {
  const [details, setDetails] = useState({
    work: "whats work?",
    study: "huh?",
    home: "home",
  });
  const [formVals, setFormVals] = useState({
    work: "",
    study: "",
    home: "",
  });
  const [visible, setVisible] = useState(false);
  const { work, study, home } = details;

  return (
    <div
      style={{
        padding: "12px",
        boxShadow: "0px 5px 8px -9px rgba(0, 0, 0, 0.75)",
        border: "1px solid lightgrey",
        backgroundColor: "white",
        borderRadius: "5px",
      }}
    >
      <h3>Intro</h3>
      <div style={{ marginTop: "8px" }}>
        <IntroItem text={`Works at ${work}`} />
      </div>
      <div style={{ marginTop: "8px" }}>
        <IntroItem text={`Studies at ${study}`} />
      </div>
      <div style={{ marginTop: "8px" }}>
        <IntroItem text={`Lives at ${home}`} />
      </div>
      <div style={{ marginTop: "8px" }}>
        <button
          onClick={() => setVisible(true)}
          style={{
            paddingTop: "6px",
            paddingBottom: "6px",
            width: "100%",
            borderRadius: "5px",
            color: "black",
            backgroundColor: "lightgrey",
          }}
        >
          Edit Details
        </button>
      </div>

      <Modal visible={visible}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setVisible(false);
            setDetails(formVals);
          }}
          style={{ padding: "24px" }}
        >
          <input
            name="work"
            value={formVals.work}
            style={{
              borderRadius: "5px",
              backgroundColor: "lightgrey",
              display: "block",
            }}
            placeholder="Work"
            onChange={(e) => {
              setFormVals({ ...formVals, work: e.target.value });
            }}
          ></input>
          <input
            name="study"
            value={formVals.study}
            style={{
              borderRadius: "5px",
              backgroundColor: "lightgrey",
              display: "block",
              marginTop: "12px",
            }}
            placeholder="Study"
            onChange={(e) => {
              setFormVals({ ...formVals, study: e.target.value });
            }}
          ></input>
          <input
            name="lives"
            value={formVals.lives}
            style={{
              borderRadius: "5px",
              backgroundColor: "lightgrey",
              display: "block",
              marginTop: "12px",
            }}
            placeholder="Lives at"
            onChange={(e) => {
              setFormVals({ ...formVals, home: e.target.value });
            }}
          ></input>
          <div
            style={{
              border: "1px solid lightgrey",
              marginTop: "12px",
              borderRadius: "5px",
              width: "55px",
              height: "23px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightgrey",
            }}
          >
            <button style={{ backgroundColor: "lightgrey" }} type="submit">
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function IntroItem(props) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <span
        style={{
          // marginRight: "8px",
        }}
      >
        {/* icon */}
      </span>
      <p>{props.text}</p>
    </div>
  );
}

function Modal(
  { visible, onClose, children } = {
    visible: false,
    onClose: () => {},
    children: null,
  }
) {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          position: "absolute",
          top: "45%",
          left: "45%",
          // minWidth: "50vw",
          minWidth: "30px",
          backgroundColor: "white",
          // rgba(0,0,0,0.95)
        }}
      >
        {children}
      </div>
    </div>
  );
}
