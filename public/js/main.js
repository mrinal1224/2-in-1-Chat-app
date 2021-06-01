import * as store from "./store.js";
import * as wss from "./wss.js"
import * as webRtc from "./webRTChandler.js"
import * as constants from "./constants.js"

const socket = io('/')
wss.registerSocketEvents(socket)


const copybutton = document.getElementById('personal_code_copy_button')
copybutton.addEventListener('click', ()=>{
    let personalcode = store.getState().socketId
    navigator.clipboard && navigator.clipboard.writeText(personalcode)
})



const chatButton = document.getElementById('personal_code_chat_button')
const videoCallButton = document.getElementById('personal_code_video_button')


chatButton.addEventListener('click' , ()=>{
    console.log("chat button")

    const personalCalleeCode = document.getElementById('personal_code_input').value

    const callType = constants.callType.CHAT_PERSONAL_CODE;
   
    webRtc.sendCallRequest(callType , personalCalleeCode)
})


videoCallButton.addEventListener('click' , ()=>{
    console.log("video button")
    const personalCalleeCode = document.getElementById('personal_code_input').value

    const callType = constants.callType.VIDEO_PERSONAL_CODE;
   
    webRtc.sendCallRequest(callType , personalCalleeCode)
})