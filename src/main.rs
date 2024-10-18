fn sum(input_string: String) -> i32 {
    if input_string.is_empty() {return 0;}
    input_string.parse::<i32>().expect("Not a number")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_string() {
        assert_eq!(sum(String::new()), 0);
    }

    #[test]
    fn one_number() {
        assert_eq!(sum(String::from("1")), 1);
    }
}

fn main() {

}