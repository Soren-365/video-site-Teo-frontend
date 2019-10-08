function LectureCard ({ medialib, dataKey }) {

    const datakey = medialib[dataKey]

    return (
        <div className={`${datakey.classNameDiv} lecturecard`}>
        <div className="imagebox">
                <img src={datakey.imgUrl1}></img>
        </div>
        <div>           
                <div className="textbox">
                <div className="headlinetext"> <h2>{datakey.headline1}</h2></div>  
                <div className="seperator"></div>
                <div className="subtexts"> <p>{datakey.text1}</p><p>{datakey.text2}</p><p>{datakey.text3}</p></div> 
                </div>
        </div>
        {/* //className={datakey.classNameHln1}//className={datakey.classNameTxt1}   */}
    <style jsx>{`

.lecturecard
{
position: relative;
width: 591px;
height: 170px;
overflow: none;
display: flex;
justify-content: space-between;
margin-left: calc( (100% - 591px)/2 );
margin-right: calc( (100% - 591px)/2 );
margin-top: 52px;
margin-bottom: 52px;
}

.textbox {
position: relative;
width: 240px;
height: 63px;
margin-left: 16px;
margin-top: 23px;
}

.imagebox {
    position: relative;
    width: 274px;
height: 158.24px;

margin-top: 4px;
}

.headlinetext {
    position: absolute;
    width: 310px;
height: 16px;
margin-left: 0px;
margin-top: 5px;


font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 18px;
letter-spacing: 0.01em;
}

.textbox h2 {
    font-family: 'Roboto Mono', monospace;
}

.subtexts {
position: absolute;
width: 213px;
height: 26px;
margin-left: 16px;
margin-top: 38px; 

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 13px;

/* or 108% */
letter-spacing: 0.03em;
}

.seperator {
position: absolute;
width: 300px;
height: 1px;
margin-left: 1px;
margin-top: 26px; 
border: 1px solid #0094FF;
}
    `}</style>
    </div>


        
    )
}

export default LectureCard