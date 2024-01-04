export default class Countdown {
    constructor(futureDate){
        this.futureDate = futureDate
    }
    get _actualDate(){
        return new Date()
    }
    get _futureDate(){
        return new Date(this.futureDate)
    }
    get _timeDiff(){
        // isso vai fazer a diferença de tempo entre a data futura que eu especifiquei lá no script.js - a data atual em milisegundos
        return (this._futureDate.getTime() - this._actualDate.getTime())
    }
    get days(){
        return Math.floor(this._timeDiff / (24 * 60 * 60 * 1000))
    }
    get hours(){
        return Math.floor(this._timeDiff / (60 * 60 * 1000))
    }
    get minutes(){
        return Math.floor(this._timeDiff / (60 * 1000))
    }
    get seconds(){
        return Math.floor(this._timeDiff / 1000)
    }
    get total(){
        const days = this.days
        const hours = this.hours % 24
        const minutes = this.minutes % 60
        const seconds = this.seconds % 60
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }
}