import {useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Display.module.css";
export default function Display(){
        const [firstName,setFirstName]=useState("");
        const[lastName,setLastName]=useState("");
        const[display,setDisplay] = useState(false);
        const navigate = useNavigate();
    console.log(firstName,lastName);
    const handleSubmit=(e)=>{
        e.preventDefault();
         if(firstName.trim() && lastName.trim()){
                setDisplay(true);
                navigate("/");
            }else{
                setDisplay(false);
        }
        
    }
    return(
        <form onSubmit={handleSubmit} style={{border:"1px solid green",height:"100vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
            <h1>Full Name Display</h1>
            <div>
                First Name: {" "}
                <input type="text" value={firstName} placeholder="enter your fullName" className={styles["placeholder"]} onChange={(e)=>{
                    const onlyLetters= e.target.value.replace(/[^a-zA-z]/g,'');
                    setFirstName(onlyLetters)
                    }} required/>
            </div>
            <div>
                Last Name: {" "}
                <input type="text" value={lastName} placeholder="enter your LastName" className={styles["placeholder"]} onChange={(e)=>{
                      const onlyLetters= e.target.value.replace(/[^a-zA-z]/g,'');
                      setLastName(onlyLetters)
                }} required/>
            </div>
            <button type="submit" style={{padding:"10px"}}>Submit</button>
            {display && (
                 <div style={{color:"black"}}data-testid="full-name-display">
                    Full Name: {firstName} {lastName}
                 </div>
            )}
        </form>
    )
}
