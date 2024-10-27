import { useState } from "react"
import Store from "../../../Store"
import Api from "../../../Api"

export default function useCreateProduct () {
    const [cardImage, setCardImage] = useState(undefined)
    const [product, setProduct] = useState({
        title: '',
        gender: '', //1,2 or 3
        categories: 'Ремни',
        description: '',
        price: '', 
        discount: '',
        color: '#000',
        color_name: 'Зеленый',
        main_image: undefined,
        images: [],
        material: '',
        tags: ['сумка', 'зелёная сумка'], //массив
    })
    const [error, setError] = useState({
        cardImage: false,
    })

    Store.useListener('add_image', (data) => {
        let imageList = structuredClone(product.images)

        for(let i = 0; i < data.length; i++) {
            imageList.push(data[i])
        }

        setProduct(prev => ({...prev, images: imageList}))
    })

    const inputProductParams = (name, value) => {
        switch (name) {
            case 'price':
                setProduct(prev => ({...prev, [name]: value}))
            case 'discount':
                setProduct(prev => ({...prev, [name]: value}))
            default:
                setProduct(prev => ({...prev, [name]: value}))
        }
    }

    const addCardImage = (e) => {

        if(!e.target.files[0]) {
            return
        }
        
        const [file] = e.target.files;
        const reader = new FileReader(); 

        reader.onload = ({ target }) => {
            const img = new Image(); 
            img.onload = () => {
                const ratio = getAspectRatio(img.width, img.height)
                if(ratio !== '3:4') {
                    setError(prev => ({...prev, cardImage: `Неверное соотношение сторон: ${ratio}`}))
                }
            };
            img.src = target.result;
        };
        reader.readAsDataURL(file)

        setCardImage(URL.createObjectURL(e.target.files[0]))
        setProduct(prev => ({...prev, main_image: e.target.files[0]}))
    }

    const changeCheckBox = (gen) => {
        setProduct(prev => {
            const { gender } = prev;
    
            if (gender === '3') {
                return { ...prev, gender: gen === '1' ? '2' : '1' };
            }
    
            if (gender === gen) {
                return { ...prev, gender: '' };
            }
    
            if ((gender === '1' && gen === '2') || (gender === '2' && gen === '1')) {
                return { ...prev, gender: '3' };
            }
    
            return { ...prev, gender: gen };
        });
    }

    const createProduct = async (e) => {
        e.preventDefault()

        console.log(product)
        let data = new FormData()
        data.append('title', product.title)
        data.append('gender', product.gender)
        data.append('categories', product.categories)
        data.append('description', product.description)
        data.append('price', product.price)
        data.append('discount', product.discount)
        data.append('color', product.color)
        data.append('color_name', product.color_name)
        data.append('main_image', product.main_image)
        data.append('images', product.images)
        product.images.forEach((el => {
            data.append('images', el)
        }))
        data.append('material', product.material)
        product.tags.forEach(tag => {
            data.append('tags', tag);
        });

        let res = await Api.postFormData('api/products/create/product', data)
        if(res === 'error') {
            return 
        }

        if(res?.success) {
            Store.setListener('add_product', data)
        } else {

            return
        }
    }

    const getAspectRatio = (width, height) => {
        function gcd(a, b) {
            return b === 0 ? a : gcd(b, a % b);
        }
    
        const divisor = gcd(width, height);
    
        const aspectWidth = width / divisor;
        const aspectHeight = height / divisor;
    
        return `${aspectWidth}:${aspectHeight}`;
    }

    return {
        product, 
        cardImage,
        error,
        setError,
        inputProductParams, 
        changeCheckBox, 
        addCardImage,
        createProduct
    }
}