
const Fruits = (props) => {
   /* const [products, setProducts] = useState(0)*/
    const products = [
        {
            id: 1,
            name: 'mere',
            category: 'fructe',
            reserved: false,
            bid: 0
        },
        {
            id: 2,
            name: 'pere',
            category: 'fructe',
            reserved: false,
            bid: 0
        },
        {
            id: 3,
            name: 'banane',
            category: 'fructe',
            reserved: false,
            bid: 0
        },
        {
            id: 3,
            name: 'banane',
            category: 'fructe',
            reserved: false,
            bid: 0
        },
        {
            id: 4,
            name: 'corn cu ciocolata',
            category: 'dulciuri',
            reserved: false,
            bid: 0
        },
        {
            id: 5,
            name: 'biscuiti',
            category: 'dulciuri',
            reserved: false,
            bid: 0
        }
    ]

    return (
       
<div>
  <select>
    <option >Alege cateogoria</option>
    <option>Fructe</option>
    <option>Dulciuri</option>
   
  </select>
</div>
       
    )
}

 /*<option value="banane">Banane</option>
    <option value="4">Corn</option>
    <option value="5">Napolitane</option>
    <option value="6">Fructul Dragonului</option>
    <option value="7">Afine</option>
    <option value="8">Mure</option>
    <option value="9">Capsuni</option>
    <option value="10">Pizza</option>
    <option value="11">Tricou</option>*/

export default Fruits
