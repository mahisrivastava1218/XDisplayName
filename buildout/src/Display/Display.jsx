import {useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Display.module.css";
export default function Display(){
        const [fullName,setFullName]=useState("");
        const[lastName,setLastName]=useState("");
        const[display,setDisplay] = useState(false);
        const navigate = useNavigate();
        const handlerClick=()=>{
            if(fullName && lastName){
                setDisplay(true);
            }else{
                setDisplay(false);
            }
        }
    console.log(fullName,lastName);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setDisplay(true);
        navigate("/");
    }
    return(
        <form onSubmit={handleSubmit} style={{border:"1px solid green",height:"100vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
            <h1>Full Name Display</h1>
            <div>
                First Name: {" "}
                <input type="text" value={fullName} placeholder="enter your fullName" className={styles["placeholder"]} onChange={(e)=>{
                    const onlyLetters= e.target.value.replace(/[^a-zA-z]/g,'');
                    setFullName(onlyLetters)
                    }} required/>
            </div>
            <div>
                Last Name: {" "}
                <input type="text" value={lastName} placeholder="enter your LastName" className={styles["placeholder"]} onChange={(e)=>{
                      const onlyLetters= e.target.value.replace(/[^a-zA-z]/g,'');
                      setLastName(onlyLetters)
                }} required/>
            </div>
            <button type="submit" style={{padding:"10px"}} onClick={handlerClick}>Submit</button>
            {display && (
                 <div style={{color:"black"}}>
                    Full Name: {fullName} {lastName}
                 </div>
            )}
        </form>
    )
}
