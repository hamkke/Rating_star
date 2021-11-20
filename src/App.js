import React, { useEffect } from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import {Route} from 'react-router-dom';


function App() {

  // 오늘 기준으로 요일 나열하기
  const randomDay = (props) => {
    let week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    let newArr = [];
    let today = [];
    for (let i = 0; i < 7; i++) {
      // let newArr = [];
      let Now = new Date();
      let B = new Date(Now.setDate(Now.getDate()+i)).getDay();

      // if (B === 0) {
      //     // let NowC = new Date();
      //     // let C = new Date(NowC.setDate(NowC.getDate()  + i)).getDate();
      // }
      newArr.push(B)
    }
    for(let i = 0; i < 7; i++){
        let setday = week[newArr[i]];
        today.push(setday);
    }
    return today;
  }
  const day = randomDay();

  // 무작위 별점 표시
  let [count, setNum] = React.useState(null);
  let buttons;
  function randomStar() {
    setNum(count = Math.floor(Math.random()*10 % 6))
    for(let j = 0; j < count; j++)
     {buttons[j].style.backgroundColor = "green" } 
  }

  useEffect(() => {
    for(let i=0; i<7;i++ ){
      buttons = document.getElementsByClassName(`star_list${i}`);
      // btn = buttons
      // console.log(buttons)
      randomStar();   
    }
    return () => {buttons = document.getElementsByClassName("star_list"); }
  },[]);

  return (
    <div className="App" style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      margin:"70px auto 0"
      }}>
      <Wrap>
        <h1>오늘은 어땠어?</h1>
        <ul>
          <FirstList>
            <p>{day[0]}</p>
            <p></p>
            <ul>
              <li className="star_list0"></li>
              <li className="star_list0"></li>
              <li className="star_list0"></li>
              <li className="star_list0"></li>
              <li className="star_list0"></li>
            </ul>
            {/* <a>✳</a> */}
          </FirstList>
        </ul>

        <ul>
          <FirstList>
            <p>{day[1]}</p>
            <p></p>
            <ul>
              <li className="star_list1"></li>
              <li className="star_list1"></li>
              <li className="star_list1"></li>
              <li className="star_list1"></li>
              <li className="star_list1"></li>
            </ul>
            {/* <a>✳</a> */}
          </FirstList>
        </ul>

        <ul>
          <FirstList>
            <p>{day[2]}</p>
            <p></p>
            <ul>
              <li className="star_list2"></li>
              <li className="star_list2"></li>
              <li className="star_list2"></li>
              <li className="star_list2"></li>
              <li className="star_list2"></li>
            </ul>
            {/* <a>✳</a> */}
          </FirstList>
        </ul>

        <ul>
          <FirstList>
            <p>{day[3]}</p>
            <p></p>
            <ul>
              <li className="star_list3"></li>
              <li className="star_list3"></li>
              <li className="star_list3"></li>
              <li className="star_list3"></li>
              <li className="star_list3"></li>
            </ul>
            {/* <a>✳</a> */}
          </FirstList>
        </ul>

        <ul>
          <FirstList>
            <p>{day[4]}</p>
            <p></p>
            <ul>
              <li className="star_list4"></li>
              <li className="star_list4"></li>
              <li className="star_list4"></li>
              <li className="star_list4"></li>
              <li className="star_list4"></li>
            </ul>
            {/* <a>✳</a> */}
          </FirstList>
        </ul>

        <ul>
          <FirstList>
            <p>{day[5]}</p>
            <p></p>
            <ul>
              <li className="star_list5"></li>
              <li className="star_list5"></li>
              <li className="star_list5"></li>
              <li className="star_list5"></li>
              <li className="star_list5"></li>
            </ul>
            {/* <a>✳</a> */}
          </FirstList>
        </ul>

        <ul>
          <FirstList>
            <p>{day[6]}</p>
            <p></p>
            <ul>
              <li className="star_list6"></li>
              <li className="star_list6"></li>
              <li className="star_list6"></li>
              <li className="star_list6"></li>
              <li className="star_list6"></li>
            </ul>
            {/* <a>✳</a> */}
          </FirstList>
        </ul>
      </Wrap>

      
      
      
      {/* <Rating></Rating> */}
    </div>
  );
}
  // css
  const Wrap = styled.div`
    * {
      margin:0;
      padding:0;
    }
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:20px;
    border:1px solid #ddd;

    h1{
      text-align:center;
    }
    
  `;
  const FirstList = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:20px;
    padding:10px;
    ul {
      display:flex;
    }
    li {
      margin-left:15px;
      width:20px;
      height:20px;
      background-color:#ddd;
      border-radius: 10px;
      list-style: none;
    }
    a {
      margin-left:20px;
      color:#38c979;;
      text-decoration: none;
      font-size:30px;
      font-weight:bold;
      line-height:20px;
    }
  `;
export default App;
