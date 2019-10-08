function VideoCard ({ medialib, dataKey }) {

    const datakey = medialib[dataKey]

    return (
        <div className={`${datakey.classNameDiv} videocard`}>
        

        <div className="imagebox">
                <img src={datakey.imgUrl1} width="166" height="93"></img>
                </div>
 
        <div>           
                <div className="textbox">
                <div className="headlinetext"> <h2>{datakey.headline1}</h2></div>  
                <div className="seperator"></div>
                <div className="subtexts"> <p>{datakey.text1}</p><p>{datakey.text2}</p><p>{datakey.text3}</p></div> 
                </div>
        </div>
 
              

    <style jsx>{`

.videocard
{
position: relative;
width: 387px;
height: 93px;
overflow: none;
display: flex;
justify-content: space-between;
margin-left: calc( (100% - 387px)/2 );
margin-right: calc( (100% - 387px)/2 );
margin-top: 16px;
margin-bottom: 16px;
}

.textbox {
position: relative;
width: 220px;
height: 63px;
margin-left: 16px;
margin-top: 0px;
}

.imagebox {
    position: relative;
    width: 274px;

margin-right: 0px;
margin-top: 4px;
}

.headlinetext {
    position: absolute;
    width: 259px;
height: 16px;
margin-left: 0px;
margin-top: 5px;


font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 18px;
letter-spacing: 0;
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
border: 1px solid yellow;
}
    `}</style>
    </div>


        
    )
}

export default VideoCard