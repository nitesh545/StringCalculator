fn add(input_string: String) -> i32 {
    if input_string.is_empty() {return 0;}

    let splitted_string: String = input_string.trim().split_whitespace().collect::<Vec<&str>>().join(",");
    let trimmed_string: Vec<String> = splitted_string.split(',').filter(|&x| !x.is_empty()).map(|x| x.trim().to_string()).collect::<Vec<String>>();
    let numbers: Vec<i32> = trimmed_string.into_iter().map(|x| x.parse::<i32>().unwrap()).collect::<Vec<i32>>();
    let sum: i32 = numbers.iter().fold(0, |acc, x| acc + x);

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

    #[test]
    fn multiple_numbers() {
        assert_eq!(add(String::from("1, 4, 2, 8")), 15);
    }

    #[test]
    fn numbers_with_whitespaces() {
        assert_eq!(add(String::from("1\n5, 4")), 10);
    }
}

fn main() {

}