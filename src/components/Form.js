import React, {useState} from "react";

function Form(){
    const [name, setname] = useState('');
    const [birthdate, setbirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [religion, setreligion] = useState('');
    const [message, setmessage] = useState('');
    const [Hobby,sethobby]=useState("");
    
    const [display, setDisplay] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        //getHobby(event);
        const form = document.getElementById("form-input");
        // handle hobby checkbox input
        let hobby = form.elements["hobby"];
        let hobbies = "";
        console.log("tes");
        for (let index = 0; index < hobby.length; index++) {
            console.log("tes hobby");
            if (hobby[index].checked) {
                if (hobbies.length > 0) {
                hobbies += ", ";
                }
                hobbies += hobby[index].value;
            }
        }
        sethobby(hobbies);
        resetField();
        setDisplay(true);
    };

    const handlename = (event) =>{
        setname(event.target.value);
        setDisplay(false);
    }
    
    const handlebirthdate = (event) =>{
        setbirthdate(event.target.value);
        setDisplay(false);
    }

    const handleGender = (event) => {
        setGender(event.target.value);
        setDisplay(false);
    }

    const handlereligion = (event) => {
        setreligion(event.target.value);
        setDisplay(false);
    }

    const handlemessage = (event) => {
        setmessage(event.target.value);
        setDisplay(false);
    }

    function resetField() {
        document.getElementById("nameLengkap").value = "";
        document.getElementById("birthdate").value = "";
        var ele = document.getElementsByName("jenisKelamin");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        ele = document.getElementsByName("hobby");
        for(i=0;i<ele.length;i++)
            ele[i].checked = false;
        document.getElementById("religion").value = "";
        document.getElementById("message").value = "";
        setDisplay(false);
    }

    return(    
        <div>
            <h3>Biodata</h3>
            <form id="form-input" onSubmit={handleSubmit}>
                <div id="form-field">
                    <label for="nameLengkap" className="form-label">Name</label><br></br>
                    <input className="form-control" type="text" id="nameLengkap" name="name" placeholder="isi name lengkap ..." onChange={handlename} ></input>
                </div>
                <div id="form-field">
                    <label for="birthdate" className="form-label" >Birthdate</label><br></br>
                    <input className="form-control" type="date" id="birthdate" name="birthdate" onChange={handlebirthdate} ></input>
                </div>
                <div id="form-field">
                <label className="form-label">Gender</label><br></br>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="jenisKelamin1" name="jenisKelamin" value="Laki-Laki" onChange={handleGender}/>
                        Laki-Laki
                    </label>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="jenisKelamin2" name="jenisKelamin" value="Perempuan" onChange={handleGender}/> 
                        Perempuan
                    </label>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="jenisKelamin3" name="jenisKelamin" value="Other" onChange={handleGender}/> 
                        Other
                    </label>
                </div>
                <div id="form-field">
                <label className="form-label">Hobby</label><br></br>
                    <input className="form-check-input" type="checkbox" id="hobi1" name="hobby" value="Ngoding"/>
                    <label className="form-check-label">Ngoding</label> 
                    <input className="form-check-input" type="checkbox" id="hobi2" name="hobby" value="Rebahan"/>
                    <label className="form-check-label">Rebahan</label> 
                    <input className="form-check-input" type="checkbox" id="hobi3" name="hobby" value="Melamun" /> 
                    <label className="form-check-label">Melamun</label> 
                    <input className="form-check-input" type="checkbox" id="hobi4" name="hobby" value="Baca Buku" />
                    <label className="form-check-label">Baca Buku</label> 
                    <input className="form-check-input" type="checkbox" id="hobi5" name="hobby" value="Nonton Youtube" />
                    <label className="form-check-label">Nonton Youtube</label> 
                    <input className="form-check-input" type="checkbox" id="hobi6" name="hobby" value="Dengerin Lagu" /> 
                    <label className="form-check-label">Dengerin Lagu</label> 
                    <input className="form-check-input" type="checkbox" id="hobi7" name="hobby" value="Other"/>
                    <label className="form-check-label">Other</label> 
                </div>
                <div id="form-field">
                <label for="religion" className="form-label">Religion</label><br></br>
                    <select className="form-select" id="religion" name="religion" onChange={handlereligion} >
                        <option value="" disable selected hidden>Pilih religion ...</option>
                        <option value="Islam">Islam</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Protestan">Protestan</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Budha">Budha</option>
                        <option value="Kong Hu Cu">Kong Hu Cu</option>
                    </select>
                </div>
                <div id="form-field">
                    <label for="message" className="form-label">message</label>
                    <textarea className="form-control" id="message" rows="7" placeholder="Tinggalkan message...." onChange={handlemessage}></textarea>
                </div>
                <div id="submit-btn">
                    <button className="btn btn-primary" type="submit" id="mybtn"> Submit </button>
                </div>
                 
            </form>
            <div className="table-responsive">
                <table id="tableBio" className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="lbl-width">Label</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            {
                                display?
                                <td id="outName">{name}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Birthdate</th>
                            {
                                display?
                                <td id="outTgl">{birthdate}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Gender</th>
                            {
                                display?
                                <td id="outJK">{gender}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Hobby</th>
                            {
                                display?
                                <td id="outHobi">{Hobby}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Religion</th>
                            {
                                display?
                                <td id="outreligion">{religion}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Message</th>
                            {
                                display?
                                <td id="outmessage">{message}</td>
                                :null
                            }
                        </tr>
                    </tbody>
                </table>
            <div id="submit-btn">
                <button className="btn btn-secondary ms-2" type="reset" id="mybtn" onClick={resetField}> Reset </button> 
            </div>
        </div>
            
                 
        </div>
    );
}

export default Form;