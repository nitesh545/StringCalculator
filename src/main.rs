fn sum(inputString: String) -> i32 {
    0
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_string() {
        assert_eq!(sum(String::new()), 0);
    }
}

fn main() {

}