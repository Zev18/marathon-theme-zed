#[allow(dead_code)]
struct Thing<'a> {
    name: &'a str
}

fn main() {
    let mine = Thing { name: 'test' };
    let other = mine.name;

    // Say Hello
    println!("Hello, World!");
}
