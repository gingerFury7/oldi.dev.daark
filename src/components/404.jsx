import React from "react";
import styled from "styled-components";


export default () => {
    return (<Body>
        <div class="text"><p>404</p></div>
        <div class="container">
            <div class="caveman">
                <div class="leg">
                    <div class="foot"><div class="fingers"></div></div>
                </div>
                <div class="leg">
                    <div class="foot"><div class="fingers"></div></div>
                </div>
                <div class="shape">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="head">
                    <div class="eye"><div class="nose"></div></div>
                    <div class="mouth"></div>
                </div>
                <div class="arm-right"><div class="club"></div></div>
            </div>
            <div class="caveman">
                <div class="leg">
                    <div class="foot"><div class="fingers"></div></div>
                </div>
                <div class="leg">
                    <div class="foot"><div class="fingers"></div></div>
                </div>
                <div class="shape">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="head">
                    <div class="eye"><div class="nose"></div></div>
                    <div class="mouth"></div>
                </div>
                <div class="arm-right"><div class="club"></div></div>
            </div>
        </div>
    </Body>
    )
}

const Body = styled.div`
   background-color: #444; font-family: 'SFProText', cursive; margin: 0; overflow: hidden; padding: 0; 
   position: absolute ;
   width: 100vw;
   height: 100vh;
   $color-white:     #fff;
   $color-red-1:     #D13433;
   $color-red-2:     #932422;
   $color-skin-1:    #EAB08C;
   $color-skin-2:    #D9766C;
   $color-skin-3:    #B2524D;
   $color-hair:      #13242C;
   $color-wood-1:    #601513;
   $color-wood-2:    #410A09;
   $color-black:     #13242C;
   position: absolute;
       @mixin position {
    }
    @mixin top50 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    @mixin left50 {
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
    @mixin centered {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .text {
  @include centered;
  color: rgba($color-black, 0.1);
  font-size: 30em;
  text-align: center;
  top: 40%;
}
.container {
  @include centered;
  height: 300px;
  width: 500px;
  &:after {
    @include position;
    content: "";
    background-color: rgba($color-black, 0.1);
    border-radius: 12px;
    bottom: 40px;
    height: 12px;
    left: 80px;
    width: 350px;
    z-index: -1;
  }
}
/*/////////////////// caveman */
.caveman {
  height: 300px;
  position: absolute;
  width: 250px;
}
.caveman:nth-child(1) { right: 20px; }
.caveman:nth-child(2) { left: 20px; transform: rotateY(180deg); }
.head {
  @include position;
  background-color: $color-hair;
  border-radius: 50px;
  height: 140px;
  left: 60px;
  top: 25px;
  width: 65px;
  &:after, &:before {
    content: "";
    @include position;
    background-color: $color-black;
    border-radius: 10px;
    height: 20px;
    width: 7px;
  }
  &:after   { left: 35px; top: -8px; transform:rotate(20deg); }
  &:before  { left: 30px; top: -8px; transform:rotate(-20deg); }
  .eye {
    @include left50;
    background-color: $color-skin-1;
    border-radius: 50px;
    height: 16px;
    left: 45%;
    top: 40px;
    width: 48px;
    &:after, &:before {
      content: "";
      @include top50;
      background-color: $color-black;
      border-radius: 50%;
      height: 5px;
      width: 5px;
    }
    &:after {
      left: 5px;
    }
    &:before {
      right: 9px;
    }
    .nose {
      @include centered;
      background-color: $color-skin-2;
      border-left: 8px solid rgba($color-black, 0.1);
      border-radius: 10px;
      box-sizing: border-box;
      height: 35px;
      left: 45%;
      top: 12px;
      width: 15px;
    }
  }
}
.shape {
  @include left50; 
  border-radius: 50%;
  height: 140px;
  overflow: hidden;
  top: 70px;
  width: 140px;
  .circle {
    @include position;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    &:after, &:before {
      content:"";
      @include position;      
      border-radius: 50%;
      height: 20px;      
      width: 20px;
    }
    &:after   { left: 50px; top: 10px; }
    &:before  { left: 60px; top: 45px; }
  }
  .circle:nth-child(1) { left: -12px; top: 80px; }
  .circle:nth-child(2) {
    right: 10px;
    top: 0px;
    transform: rotate(90deg);
    &:after   { left: 65px; top: 10px; }
    &:before  { display: none; }
  }
}
.caveman:nth-child(1) .shape {
  background-color: $color-red-1;
  .circle { 
    background-color: $color-red-2; 
    &:after, &:before { background-color: $color-red-2; }
  }
}
.caveman:nth-child(2) .shape {
  background-color: $color-red-2;
  .circle { background-color: $color-red-1; 
  &:after, &:before { background-color: $color-red-1; }
  }
}
.arm-right {
  @include position;
  background-color: $color-skin-1;
  border-left: 8px solid rgba($color-black, 0.1);
  border-radius: 50px;
  box-sizing: border-box;
  height: 180px;
  left: 135px; 
  top: 80px;
  transform-origin: 30px 30px;
  width: 60px;
  z-index: 1;
  .club {
    @include position;
	  border-bottom: 110px solid $color-wood-1;
    border-left:   10px solid transparent;
    border-right:  10px solid transparent;
    height: 0;
    left: -60px;
    top: 120px;
    transform: rotate(70deg);
    width: 20px;
    &:after, &:before {
      @include position;
      content:"";
      background-color: $color-wood-1;
      border-radius: 50%;
      left: 0;
    }
    &:after   { height: 20px; width: 20px; top: -10px; }
    &:before  { height: 40px; width: 40px; left: -10px; top: 90px; }
  }
}
.leg {
  @include position;
  border-radius: 10px;
  height: 55px;  
  top: 200px;
  width: 10px;
  &:after {
    @include position;
    content: "";
    border-radius: 50%;
    height: 10px;
    left: -5px;
    top: 15px;
    width: 10px;
  }
  .foot {
    @include position;
    border-radius: 25px 25px 0 0;
    height: 25px;
    left: -38px;
    top: 30px;
    width: 50px;
    &:after, &:before, .fingers, .fingers:after {
      @include position;
      background-color: $color-skin-1;
      border-radius: 50%;
      bottom: 0px;
      height: 15px;
      transform-origin: bottom;
      width: 15px;
    }
    &:after         { left: -6px; content: ""; }
    &:before        { left: 8px; transform: scale(0.6); content: ""; }
    .fingers        { left: 15px; transform: scale(0.6); }
    .fingers:after  { left: 11px; content: ""; }
  }
}
.leg:nth-child(1)   { 
  background-color: $color-skin-3;
  left: 95px;
  &:after { background-color: $color-skin-3; }
  .foot   { background-color: $color-skin-3; 
    &:after { background-color: $color-skin-3;}
    &:before {display: none;}
  }
}
.leg:nth-child(2)   { 
  background-color: $color-skin-2;
  left: 115px;   
  &:after { background-color: $color-skin-2; }
  .foot   { background-color: $color-skin-2; }
}
/*/////////////////// animation */
.caveman:nth-child(1) .arm-right {
  animation: arm-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
}
.caveman:nth-child(2) .arm-right {
  animation: arm-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  animation-delay: 0.6s;
}
@keyframes arm-anima {
  0%    { transform: rotate(0) }
  100%  { transform: rotate(-360deg) }
}
.caveman:nth-child(2) .head {
  animation: head-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
}
.caveman:nth-child(1) .head {
  animation: head-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  animation-delay: 0.6s;
}
@keyframes head-anima {
  0%    { top: 25px; }
  42%   { top: 25px; }
  45%   { top: 50px; }
  100%  { top: 25px; }
}
.caveman:nth-child(2) .eye:after, 
.caveman:nth-child(2) .eye:before {
  animation: eye-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
}
.caveman:nth-child(1) .eye:after, 
.caveman:nth-child(1) .eye:before {
  animation: eye-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
  animation-delay: 0.6s;
}
@keyframes eye-anima {
  0%    { height: 5px; }
  42%   { height: 5px; }
  45%   { height: 1px; }
  100%  { height: 5px; }
}
.container {
  &:after {
    animation: shadow-anima 1.2s infinite cubic-bezier(.55,.01,.16,1.34);
    animation-delay: 0.1s;
  }
}
@keyframes shadow-anima {
  0%    { width: 350px; left: 80px; }
  25%   { width: 450px; left: 80px; }
  50%   { width: 350px; left: 80px; }
  75%   { width: 450px; left: 0px; }
  100%  { width: 350px; left: 80px; }
}
`;