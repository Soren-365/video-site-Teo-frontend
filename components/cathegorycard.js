function CathegoryCard ({ medialib, dataKey }) {

    const datakey = medialib[dataKey]

    return (
        <div className={`${datakey.classNameDiv} cathegorycard`}>
        
        <div>           
                <div className="textbox">
                <div className="headlinetext"> <h2>{datakey.headline1}</h2></div>  
                <div className="seperator"></div>
                <div className="subtexts"> <p>{datakey.text1}</p><p>{datakey.text2}</p><p>{datakey.text3}</p></div> 
                </div>
        </div>
        {/* //className={datakey.classNameHln1}//className={datakey.classNameTxt1}   */}
                <div className="imagebox">
                <img src={datakey.imgUrl1}></img>
                </div>
 

    <style jsx>{`

.cathegorycard
{
position: relative;
width: 535px;
height: 149px;
overflow: none;
display: flex;
justify-content: space-between;
margin-left: calc( (100% - 535px)/2 );
margin-right: calc( (100% - 535px)/2 );
margin-top: 40px;
margin-bottom: 40px;
}

.textbox {
position: relative;
width: 220px;
height: 63px;
margin-left: 16px;
margin-top: 43px;
}

.imagebox {
    position: relative;
    width: 274px;
height: 158.24px;
margin-right: 0px;
margin-top: 4px);
}

.headlinetext {
    position: absolute;
    width: 209px;
height: 16px;
margin-left: 0px;
margin-top: 5px;


font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 18px;
letter-spacing: 0.04em;
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
width: 210px;
height: 1px;
margin-left: 1px;
margin-top: 26px; 
border: 1px solid #FC1D1D;
}
    `}</style>
    </div>


        
    )
}

export default CathegoryCard