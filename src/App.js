/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

var clickFlag = false;
function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);


  function 제목바꾸기(){
    console.log(clickFlag); 
    if(clickFlag){
      var newArray = [...글제목];
      newArray[0] = '남자 코트 추천';
      글제목변경( newArray );
      clickFlag = false;
    }
    else {
      var newArray = [...글제목];
      newArray[0] = '여자 코트 추천';
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
      <div className="leftdiv">
      <SideToolBar></SideToolBar>
      </div>


      <div className="rightdiv">
        <div style={ { marginRight: 20 } }> 오른쪽 메뉴 정보</div>
        <button onClick={ 제목바꾸기 }> 제목버튼</button>
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
            <li class="ps-relative">
              <a href="/" className="pl8 js-gps-track nav-links--link" data-gps-track="top_nav.click({is_current:false, location:2, destination:8})" aria-controls="" data-controller="" data-s-popover-placement="right" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                      <div className="d-flex ai-center">
                          <div className="flex--item truncate">
                              Home
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
        
        <div className="s-popover p0 wmx100 wmn4 sm:wmn-initial js-top-search-popover" id="top-search" role="menu">

        
    </div>
                    </div>
  )
}

export default App;
