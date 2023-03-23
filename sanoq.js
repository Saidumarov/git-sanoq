

const map = {
    '0': 'birlar',
    '1': 'onlar',
    '2': 'yuzlar',
    '3': 'minglar',
    '4': 'onminglar',
    '5': 'yuzminglar',
    '6': 'mln',
  }
  
  const birlar = {
    '0': '',
    '1': 'bir',
    '2': 'ikki',
    '3': 'uch',
    '4': "to'rt",
    '5': 'besh',
    '6': 'olti',
    '7': 'yetti',
    '8': 'sakkiz',
    '9':" to'qqiz",
  }
  
   const onlar = {
    '0': '',
    '1':" o'n",
    '2': 'yigirma',
    '3': "o'ttiz",
    '4': 'qirq',
    '5': 'ellik',
    '6': 'oltmish',
    '7': 'yetmish',
    '8': 'sakson',
    '9': "to'qson",  
  }
  
  const yuzlar = {
    '0': '',
    '1': 'bir yuz',
    '2': 'ikki yuz',
    '3': 'uch yuz',
    '4': "to'rt yuz",
    '5': 'besh yuz',
    '6': 'olti yuz',
    '7': 'yetti yuz',
    '8': 'sakkiz yuz',
    '9':" to'qqiz yuz", 
  }
  
  const minglar = {
    '0': 'ming',
    '1': 'bir ming',
    '2': 'ikki ming',
    '3': 'uch ming',
    '4':" to'rt ming",
    '5': 'besh ming',
    '6': 'olti ming',
    '7': 'yetti ming',
    '8': 'sakkiz ming',
    '9': "to'qqiz ming", 
  }
  
  const mln = {
    '0': '',
    '1': 'bir mln',
    '2': 'ikki mln',
    '3': 'uch mln',
    '4': "to'rt mln",
    '5': 'besh mln',
    '6': 'olti mln',
    '7': 'yetti mln',
    '8': 'sakkiz mln',
    '9': "to'qqiz mln",
  }
  
  const dict = {
    map,
    birlar,
    onlar,
    yuzlar,
    minglar,
    onminglar: onlar,
    yuzminglar: yuzlar,
    mln
  }
  
  const transformTo = (number)=>{
    const arr = String(number).split('')
    let word = ''
    for(let i=0; i < arr.length; i++){
      let len = arr.length - i - 1
      word = word + ' ' + dict[dict.map[len]][arr[i]] 
    }
    return word
  } 
  
  console.log(transformTo(14))