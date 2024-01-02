const button = {
   get element(){
        return this._elementType
   },
   set element(tipo){
    this._elementType = document.createElement(tipo)
   }
}
