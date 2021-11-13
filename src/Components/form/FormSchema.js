import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name is required")
        .min(2, "Name must be 2 characters long"),
    "pizza-size": yup
        .string()
        .oneOf(["small", "medium", "large"], "size is required"),
    pepperoni: yup.string(),
    sausage: yup.string(),
    "canadian-bacon": yup.string(),
    "spicy-italian-sausage": yup.string(),
    "grilled-chicker": yup.string(),
    onions: yup.string(),
    "green-pepper": yup.string(),
    "diced-tomatos": yup.string(),
    "black-olives": yup.string(),
    "roasted-garli": yup.string(),
    "artichoke-hearts": yup.string(),
    "three-cheese": yup.string(),
    pineapple: yup.string(),
    "extra-cheese": yup.string(),
    special: yup
        .string()
        .trim()
        .max(100, "No more than 100 characters")
});

export default formSchema;