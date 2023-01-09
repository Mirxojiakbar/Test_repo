import { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import "./style.scss";


const index = () => { 
  const { state, setState } = useContext(Context);

  const BurgerClicked = () => {
    setState(state => !state);
  }

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const response = await fetch("https://api.github.com/users/Mirxojiakbar");
    const result = await response.json();
    setPost(result);

  };



  useEffect(() => {
    fetchPost()
  }, []);

  return (
    <>
      <div className="mb-mnogo">
        <div className="shadow-lg  nav_bg">
          <div className="row d-flex justify-content-around ">
            <div className="col-7 d-flex align-center pb-2 pt-2 ms-3">
              <div className="d-flex w-100 align-center text-left">
                <div className="d-flex md-80 justify-content-between align-center">
                  <span className="md-yes burger_menu" onClick={() => BurgerClicked()}><iconify-icon width="40" height="40" icon="charm:menu-hamburger"></iconify-icon></span>
                  <span className="text-light cursor-pointer white_logo"><iconify-icon width="40" height="40" icon="mdi:github"></iconify-icon></span>
                  <div>
                    <input style={{ border: "1px solid gray", width: "272px", marginLeft: "12px" }} className="bg-dark pe-4 md-none text-white rounded mb-1 ps-2" type="text" placeholder="Search or jump to..." />
                    <span className="slash cursor-pointer md-none">/</span>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <p className="mb-1 fw-bolder lg-none ms-3 md_text text-white cursor-pointer">Pull </p>
                    <p className="mb-1 fw-bolder lg-yes md-none ms-3 md_text text-white cursor-pointer">Pulls </p>
                    <p className="mb-1 fw-bolder lg-none ms-1 md_text text-white cursor-pointer">requests</p>
                    <p className="mb-1 fw-bolder md-none ms-3 md_text text-white cursor-pointer">lssues</p>
                    <p className="mb-1 fw-bolder md-none ms-3 md_text text-white cursor-pointer">Codespaces</p>
                    <p className="mb-1 fw-bolder md-none ms-3 md_text text-white cursor-pointer">Marketplace</p>
                    <p className="mb-1 fw-bolder md-none ms-3 md_text text-white cursor-pointer">Explore</p>
                  </div>
                </div>


              </div>

            </div>

            <div className="col-2  md-none d-flex align-center">

            </div>

            <div className="col-lg-1 some_response col-exsm-1 col-md-2 col-sm-1 text-light d-flex align-center justify-content-around pb-2 pt-2 ">
              <span className="me-0 cursor-pointer">
                <iconify-icon width="16" height="16" icon="octicon:bell-16"></iconify-icon>
              </span>
              <div className="md-none cursor-pointer">
                <iconify-icon icon="ic:baseline-plus"></iconify-icon>
                <iconify-icon icon="gridicons:dropdown"></iconify-icon>
              </div>
              <div className="md-none cursor-pointer">
                <img src={post.avatar_url} className="rounded-circle" alt="avatar" width="22px" />
                <iconify-icon icon="gridicons:dropdown"></iconify-icon>
              </div>
            </div>
          </div>

          <div className={state ? "nav_bg d-block" : "nav_bg d-none"} id="d-n">
            <div>
              <input style={{ border: "1px solid gray", marginLeft: "12px" }} className="bg-dark pe-4 text-white rounded mb-1 ps-2 w-90" type="text" placeholder="Search or jump to..." />
              <span className="slash-md">/</span>
            </div>
            <div className="">
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white mt-3 cursor-pointer">Dashboard</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer">Pull requests</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer">lssues</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer">Codespaces</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer">Marketplace</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer">Explore</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer">Spoonsors</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer">Settings</p>
              <p className="mb-1 fw-bolder list_words ms-3 md_text text-white cursor-pointer"><img src={post.avatar_url} className="rounded-circle" alt="avatar" width="22px" />Mirxojiakbar</p>
              <p className="mb-1 d-flex pb-4 fw-bolder list_words ms-3 md_text text-white cursor-pointer"><iconify-icon icon="ph:sign-out-bold" width="20"></iconify-icon> Sign out</p>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default index;