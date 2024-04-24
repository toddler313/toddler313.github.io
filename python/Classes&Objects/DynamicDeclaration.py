def init(self, name, age):
    self.name = name
    self.age = age

def greet(self):
    print(f"Your name: {self.name} and you are {self.age} years old")


# Dynamically declare the class
MyClass = type("MyClass", (), {
    "__init__": init,
    "greet": greet
})


# Instantiate an object from MyClass
obj = MyClass('Brian', 33)
obj.greet()