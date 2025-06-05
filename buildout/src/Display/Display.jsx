import {useState } from "react";
import styles from "./Display.module.css";
export default function Display(){
        const [firstName,setFirstName]=useState("");
        const[lastName,setLastName]=useState("");
        const[display,setDisplay] = useState(false);
    console.log(firstName,lastName);
    const handleSubmit=(e)=>{
        e.preventDefault();
         if(firstName.trim() && lastName.trim()){
                setDisplay(true);
            }else{
                setDisplay(false);
        }
        
    }
    return(
        <div style={{border:"1px solid green",height:"100vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
            <h1>Full Name Display</h1>
            <div>
                First Name:
                <input type="text" value={firstName} placeholder="enter your firstName" className={styles["placeholder"]} onChange={(e)=>{
                    // const onlyLetters= e.target.value.replace(/[^a-zA-z]/g,'');
                    setFirstName(e.target.value)
                    }} required/>
            </div>
            <div>
                Last Name:
                <input type="text" value={lastName} placeholder="enter your LastName" className={styles["placeholder"]} onChange={(e)=>{
                    //   const onlyLetters= e.target.value.replace(/[^a-zA-z]/g,'');
                      setLastName(e.target.value)
                }} required/>
            </div>
            <button type="submit" style={{padding:"10px"}}>Submit</button>
            </form>
            {display && (
                 <div style={{color:"black"}}>
                    Full Name: {firstName} {lastName}
                 </div>
            )}
        </div>
    )
}
