/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Appshell from './components/Appshell';

var clickFlag = false;
function App() {

  let [글제목, 글제목변경] = useState(['1번 질문', '2번 질문', '3번 질문']);
  let [따봉, 따봉변경] = useState(0);


  function 제목바꾸기(){
    console.log(clickFlag); 
    if(clickFlag){
      var newArray = [...글제목];
      newArray[0] = '1번 질문 활성화';
      글제목변경( newArray );
      clickFlag = false;
    }
    else {
      var newArray = [...글제목];
      newArray[0] = '1번 질문';
      글제목변경( newArray );
      clickFlag = true;
    }
  }

  let posts = '리액트에 대해서 질문합니다';
  return (
    <div className="App">
      
   
      <div className="black-nav">
        <div style={ { marginRight: 20 } }> MI StackOverFlow</div>
        <MainInput></MainInput>
      </div>
   
      {/*
      <Appshell/>
      */}
      <div className="leftdiv">
      <SideToolBar></SideToolBar>
      </div>


      <div className="rightdiv">
        <div style={ { marginRight: 20 } }> 본문 </div>
        <button onClick={ 제목바꾸기 }> 글 활성화</button>
        <div className="list">
          <h3> {글제목[0]} <span onClick={ ()=> { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
          <p> 4월 6일 등록</p>
          <hr/>
        </div>
        <div>
        <div className="list">
          <h3> {글제목[1]} </h3>
          <p> 4월 7일 등록</p>
          <hr/>
        </div>
        <div className="list">
          <h3> {글제목[2]}</h3>
          <p> 4월 8일 등록</p>
          <hr/>
        </div>
      </div>
      </div>

        
        <Content></Content>
      
    </div>
 );
}

function Content(){
  return(
    <div id="content" className="snippet-hidden">         
    </div>
  ) 
}

function SideToolBar(){
  return (
    <div className="left-sidebar--sticky-container js-sticky-leftnav">
        <nav role="navigation">
            <ol className="nav-links"> 
              <li className="ps-relative  youarehere" >
                  <a
                    href="/"
                    className="pl8 js-gps-track nav-links--link"
                    data-gps-track="top_nav.click({is_current:true, location:1, destination:8})"
                    aria-controls="" data-controller="" data-s-popover-placement="right"
                    data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                          <div class="d-flex ai-center">
                          Home
                          </div>
                  </a>
              </li>
              <li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">
                  <div className="d-flex ai-center">
                  Public
                  </div>
              </li>
              <li className="ps-relative" >
                  <a id="nav-questions"
                    href="/questions"
                    className="pl8 js-gps-track nav-links--link -link__with-icon"
                    data-gps-track="top_nav.click({is_current:false, location:1, destination:1})"
                    aria-controls="" data-controller="" data-s-popover-placement="right"
                    data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
              <svg aria-hidden="true" className="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"/></svg>            <span className="-link--channel-name">Questions</span>
                  </a>
              </li>
              <li className="ps-relative" >
                  <a id="nav-tags"
                    href="/tags"
                    className=" js-gps-track nav-links--link"
                    data-gps-track="top_nav.click({is_current:false, location:1, destination:2})"
                    aria-controls="" data-controller="" data-s-popover-placement="right"
                    data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                          <div className="d-flex ai-center">
                              <div className="flex--item truncate">
                                  Tags
                              </div>
                          </div>
                  </a>
              </li>
            </ol>
        </nav>
    </div>
                     
    )
}

function MainInput(){
  return (
    <div className="s-topbar--searchbar--input-group">
        <input  name="q" 
                type="text" 
                placeholder="Search…"                  
                autocomplete="off" 
                maxlength="240" 
                className="s-input s-input__search js-search-field " 
                aria-label="Search" 
                aria-controls="top-search"
                data-controller="s-popover" 
                data-action="focus->s-popover#show"
                data-s-popover-placement="bottom-start"/>
        {/*
        <svg aria-hidden="true" className="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18">
        <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z">
        </path>
        </svg>
        */}
        <div className="s-popover p0 wmx100 wmn4 sm:wmn-initial js-top-search-popover" id="top-search" role="menu">

        
    </div>
                    </div>
  )
}

export default App;
