class Info():
    
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello {self.name} and you're {self.age} years old already!")
        while True: 
            data = input("Do you want to greet someone else? (y/n): ")
            if data != 'y' : break
            else :
                self.name = input("Enter someone's name: ")
                if self.name == "done" : break
                self.age = input("Enter someone's age: ")
                print(f"Your Name {self.name} and you're {self.age} years old")
        

obj = Info('Brian', 33)
obj.greet()