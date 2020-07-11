import React, {useState, useEffect} from 'react'

const Home = ({data}) => {
    console.log(data)
    const [email, setEmail] = useState("");
    const getEmail = e => {
      console.log(e.target.value);
      setEmail(e.target.value)
    }

    const updateMacros = async () => {
      const res = await fetch('http://localhost:3000/api/api', {
        method: 'post',
        body: JSON.stringify(email)
      })
    }


    return (
    <div>
      <input type="text" onChange={getEmail}/>
      <button onClick={updateMacros}>send post</button>
    </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/api");
    const json = await res.json();
    return {
      props: {
        data: json,
      },
    };
  }

export default Home