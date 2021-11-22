import styled from "styled-components";
import {useState, useEffect} from "react";

const Product = () => {


    const Wrapper = styled.div`
        width: 100%;
        // height: 1000px;
        border : 1px solid black;
    `
    const Container = styled.div`
    
        width: 1200px;
        // height: 400px;
        // border : 1px solid black;
        margin : auto;
        display : grid;
        grid-template-columns: 48% 50%;
        grid-gap: 1%;
        box-shadow: 0px 0px 5px 10px gray;
    `
    const [name, setName] = useState("Arrabiata");
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    const handleClick = async () => {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_KEY}/search.php?s=${name}`);
        let data = await res.json();
        setData(data.meals[0])
        setLoading(false);
        // console.log(data.meals[0])
    }

    const Image_container = styled.div`
        width: 80%;
        height: 70%;
        margin: auto;
        
    `
    const Image = styled.img`
        width: 100%;
        height: 100%;
        padding: 20px;
    `
    const Text_container = styled.div`
        padding: 20px;
        text-align: left;
    `
    const P = styled.p`
        margin-top: -15px;
    `

    console.log(data);
    return (

        <Wrapper>
            <input style = {{width: "340px", height: "40px", fontSize: "24px"}} value = {name} onChange = {(e) => setName(e.target.value)} type  = "text" name = "name" placeholder = "Enter the product name" /> <br />
            <button style = {{width: "200px", height: "40px", padding: "3px", textAlign : "center", backgroundColor: "gray", fontWeight: "bolder", color: "white"}} onClick = {handleClick}>Search</button>
            
            
            {
                loading? (
                    <Container>
                        <h3>Please search any restaurents</h3>
                    </Container>
                ) : (
                    <Container>
                        <Image_container>
                            <Image src = {data.strMealThumb} alt = "Image" />
                        </Image_container>
                        <Text_container>
                            <h3>Name : </h3> <P>{data.strMeal}</P>
                            <h3>Category : </h3><P>{data.strCategory}</P>
                            <h3>AREA : </h3><P>{data.strArea}</P>
                            <h3>Instruction</h3><P>{data.strInstructions}</P>
                            <h3>Youtube link</h3><P>{data.strYoutube}</P>
                            <h2>Need for cook</h2>
                            <P>
                                {data.strIngredient1}, {data.strIngredient2}, {data.strIngredient3}, {data.strIngredient4}, {data.strIngredient5}, {data.strIngredient6}, {data.strIngredient7}, {data.strIngredient8}
                            </P>
                            <h2>Composition</h2>
                            <P>
                                {data.strMeasure1}, {data.strMeasure2}, {data.strMeasure3}, {data.strMeasure4}, {data.strMeasure5}, {data.strMeasure6}, {data.strMeasure7}, {data.strMeasure8}
                            </P>
                        </Text_container>
                    </Container>
                )
            }
                
            
        </Wrapper>
    )
}

export {Product};