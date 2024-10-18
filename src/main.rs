fn add(input_string: String) -> i32 {
    if input_string.is_empty() {return 0;}

    let splitted_string = input_string.split(',').collect::<Vec<&str>>();
    let trimmed_string = splitted_string.into_iter().map(|x| x.trim().to_string()).collect::<Vec<String>>();
    let numbers = trimmed_string.into_iter().map(|x| x.parse::<i32>().unwrap()).collect::<Vec<i32>>();
    let sum = numbers.iter().fold(0, |acc, x| acc + x);
    sum
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_string() {
        assert_eq!(add(String::new()), 0);
    }

    #[test]
    fn one_number() {
        assert_eq!(add(String::from("1")), 1);
    }

    #[test]
    fn two_numbers() {
        assert_eq!(add(String::from("1, 4")), 5);
    }

}

fn main() {

}