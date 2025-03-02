import React, { useEffect } from 'react'
import { sUser } from './store';
import User from './components/User';

export default function App() {
  console.log("App");

  //truờng họp là nhánh thì có thể dùng use vì thằng con khong cần biết thằng cha
  //const age = sUser.use((n)=>n.age); 
  //watch như một cái đồng hồ, khi nó thay đổi thì nó sẽ báo cho mình biết
  sUser.watch((n)=> {
    if (n.age > 19){
      console.log("You are old");
    }
  });

  useEffect(() => {
    //sUser.stop();
  }, []);

  return (
    <div>
      {/* <p>{age}</p> */}
      {/* higher order component */}
      <sUser.Wrap>
        {(user)=> (
          <>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </>
        )}
      </sUser.Wrap>
      <User />
      <sUser.DevTool name="User"/>
    </div>
  );
}

