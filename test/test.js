
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
  it('Si la palabra termina con ar, se le quitan esas 2 letras.', function(){
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
   })
  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })
  it('Si la palabra traducida tiene 10 o màs letras, se debe partir e dos por la mitad y unir con un guio medio', function(){
    const translation = platzom("Murcielago")
    expect(translation).to.equal("Murci-elago")
  })
  it('Si la palabra es palindrome cuando se escribe al derecho y al reves da la misma palabra', function(){
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})