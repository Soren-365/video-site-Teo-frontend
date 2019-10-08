export const medialib_ro =
{   lang: 'ro', 
    hreflang: 'ro-us',

    cathegorycard_1: {
        headline1: "Relatia de Cuplu",
        text1: "Dinamica si secretele relatiei de cuplu",
        text2: "",
        text3: "",
        imgUrl1: '/static/cuplu 1.jpg',
        altImg1 :"",
    },
    cathegorycard_2: {
        headline1: "Sanatate",
        text1: "Alimentatie",
        text2: "Mens sana in corpore sano",
        text3: "",
        imgUrl1: '/static/aliment 1.jpg',
        altImg1 :"",        
    },
    cathegorycard_3: {
        headline1: "Misterele Universului",
        text1: "Terra si Sistemul Solar",
        text2: "Fenomene cosmice",
        text3: "Calea Lactee",
        imgUrl1: '/static/ce-este-universul 1.jpg',
        altImg1 :"",        
    },
    cathegorycard_4: {
        headline1: "Puterea mintii",
        text1: "Gandirea pozitiva",
        text2: "Efectele miraculoase ale rugaciunii",
        text3: "",
        imgUrl1: '/static/meditatie 1.jpg',
        altImg1 :"",        
    },

    lecturecard_1: {
        headline1: "Bucurati-va de fiecare clipa !",
        text1: "Cele mai frumoase si de neuitat momente ale vietii sunt intotdeauna pline de o intensa emotie..",
        text2: "Savurati cu bucurie emotia sublima a iubirii, impartasiti fiecare clipa a miracolului iubirii cu persoana iubita !",
        text3: "",
        imgUrl1: '/static/cuplu 4 1.jpg',
        altImg1 :"",
    },
    lecturecard_2: {
        headline1: "Planuri de viitor...",
        text1: "Uniti-va visele intr-o viziune comuna, priviti si avansati impreuna catre un minunat ideal ce va incanta si va umple sufletele de fericire ... !",
        text2: "",
        text3: "",
        imgUrl1: '/static/cuplu 1 1.jpg',
        altImg1 :"",        
    },
    lecturecard_3: {
        headline1: "Sa comunicam in relatia de cuplu",
        text1: "Arta de a pastra armonia in relatia cu iubitul/ iubita chiar si atunci cand exista divergente de opinie.   ",
        text2: "Combustibilul care intretine si face sa evolueze relatia de cuplu este comunicarea.",
        text3: "",
        imgUrl1: '/static/cuplu 5.jpg',
        altImg1 :"",        
    },
    videocard_1: {
        headline1: "Egalitate intre sexe",
        text1: "By Maria Magdalena",
        text2: "Categoria Relatia de cuplu",
        text3: "854 Views",
        imgUrl1: '/static/couple9.jpeg',
        altImg1 :"",
        vidUrl1: '/static/egalitateintresexe.mp4',
    },
    videocard_2: {
        headline1: "Sa ne Oprim, sa ne Iubim",
        text1: "By Maria Magdalena",
        text2: "Categoria Relatia de cuplu",
        text3: "575 Views",
        imgUrl1: '/static/couple6.jpeg',
        altImg1 :"",
        vidUrl1: '/static/oprimiubim.mp4',        
    },
    videocard_3: {
        headline1: "Tempul Uniunii",
        text1: "By Maria Magdalena",
        text2: "Categoria Relatia de cuplu",
        text3: "513 Views",
        imgUrl1: '/static/couple8.jpeg',
        altImg1 :"",
        vidUrl1: '/static/templuluniunii.mp4',        
    },

}

export const medialib_en ={}

export function reloadMedialib (langauge) {
    if ((langauge) === "en") {
        console.log("pagemedia, english found in sitedata.settings medialib def exp changed")
     return Object.assign({}, medialib_en)
  }
  else if (langauge === "ro") {
       console.log("pagemedia, romanian found in sitedata.settings medialib def exp changed")
   return Object.assign({}, medialib_ro)
  } 
  }
  