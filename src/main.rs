fn check_if_delimiter_given(in_string: String) -> bool {
    in_string.as_bytes()[0] == '/' as u8 && in_string.as_bytes()[1] == '/' as u8
}

fn get_delimiter(in_string: String) -> Vec<String> {
    let split_string: Vec<String> = in_string.split_whitespace().map(String::from).collect::<Vec<String>>();
    let first_string: String = split_string[0].clone();
    let string_of_delimiters: String = first_string.replace("//", "");
    let only_delimiter: String = string_of_delimiters.clone();
    let mut delimiters: Vec<String> = Vec::new();
    for mut i in 0..string_of_delimiters.len() {
        if string_of_delimiters.as_bytes()[i] != '[' as u8 {continue;}

        i += 1;
        let mut delimiter_string: String = String::new();
        while string_of_delimiters.as_bytes()[i] != ']' as u8 {
            delimiter_string.push(string_of_delimiters.as_bytes()[i] as char);
            i += 1;
        }
        delimiters.push(delimiter_string);
    }
    if delimiters.is_empty() {delimiters.push(only_delimiter)};
    delimiters
}

fn remove_delimiter_part(mut in_string: String) -> String {
    let mut v: usize = in_string.chars().collect::<Vec<char>>().into_iter().position(|x| x == '\n').unwrap();
    while v != 0 {
        in_string.remove(0);
        v -= 1;
    }
    in_string.remove(0);
    in_string
}

fn check_neg_nums(nums: Vec<i32>) {
    let negative_nums: Vec<i32> = nums.into_iter().filter(|&x| x < 0).collect::<Vec<i32>>();
    if negative_nums.len() > 0 {
        panic!("negative numbers not allowed {}", negative_nums.into_iter().map(|x| x.to_string()).collect::<Vec<String>>().join(" "));
    }
}

fn add(input_string: String) -> i32 {
    if input_string.is_empty() {return 0;}

    let mut given_string: String = input_string.clone();

    let default_delimiter: String = ";".to_string();
    let is_delimiter_given: bool = check_if_delimiter_given(input_string.clone());

    if is_delimiter_given {
        let given_delimiters: Vec<String> = get_delimiter(input_string.clone());
        given_string = remove_delimiter_part(input_string.clone());
        for i in 0..given_delimiters.len() {
            given_string = given_string.replace(given_delimiters[i].as_str(), default_delimiter.as_str());
        }
        // given_string = given_string.replace(given_delimiter.as_str(), default_delimiter.as_str());
    }
    else {
        given_string = given_string.replace(",", default_delimiter.as_str());
    }

    let split_string: String = given_string.trim().split_whitespace().collect::<Vec<&str>>().join(default_delimiter.as_str());
    let trimmed_string: Vec<String> = split_string.split(default_delimiter.as_str()).filter(|&x| !x.is_empty()).map(|x| x.trim().to_string()).collect::<Vec<String>>();
    let numbers: Vec<i32> = trimmed_string.into_iter().map(|x| x.parse::<i32>().unwrap()).collect::<Vec<i32>>();

    check_neg_nums(numbers.clone());

    let small_numbers: Vec<i32> = numbers.into_iter().filter(|&x| x<= 1000 ).collect::<Vec<i32>>();

    let sum: i32 = small_numbers.iter().fold(0, |acc, x| acc + x);

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

    #[test]
    fn different_delimiter() {
        assert_eq!(add(String::from("//%\n1%5%4")), 10);
    }

    #[test]
    #[should_panic]
    fn negative_numbers() {
        add(String::from("//$\n1$5$-4"));
    }

    #[test]
    #[should_panic]
    fn negative_numbers_ii() {
        add(String::from("//$\n1$5$-4$-2$-6$-8"));
    }

    #[test]
    fn small_numbers() {
        assert_eq!(add(String::from("//$\n1$5$1005$1000")), 1006);
    }

    #[test]
    fn long_delimiter() {
        assert_eq!(add(String::from("//[$$$$]\n1$$$$5$$$$4$$$$10")), 20);
    }

    #[test]
    fn multiple_delimiters() {
        assert_eq!(add(String::from("//[%][^][;]\n1%5^4;10")), 20);
    }
}

fn main() {

}