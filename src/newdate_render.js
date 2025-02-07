let newdate_format=(value)=>{
    const date=new Date(value)
    let daynumber=date.getDay()
    let monthnumber=date.getMonth()
    const month_dict={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"}
    const month=month_dict[monthnumber]
    const day_dict={0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"}
    const day=day_dict[daynumber]
    let thedate=date.getDate()
    if(thedate<10){
        thedate='0'+thedate
    }
    return[day,thedate,month]

}
export{newdate_format}