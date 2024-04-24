
# Function in function
# "aanounce" can be any name


def loginFirst(func1):
    def wrapper():
        print("==> Do the Login here <==")
        print("User Must Login first in order to run the following below functions")
        
        func1()
        print("func1 completes. Done")
        
    return wrapper
    

@loginFirst
def func1():
    print("Operation func1 is running from another function!")

func1()