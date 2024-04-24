people = [
    {"name":"Brian", "age":33,"email":"brian@example.com"},
    {"name":"Annie", "age":19,"email":"annie@example.com"},
    {"name":"Anh Truong", "age":27,"email":"anh.truong@example.com"},
    {"name":"Quynh Tram", "age":22,"email":"quynh.tram@example.com"},
]

# QUESTION: How to sort?
#people.sort() # FAILED because py is unable to sort between dict & dict unless we specify a key
#print(people)

# => Solution 1, using another function to tell sort() how to sort
def foo(person):
    #return person["name"] # we can also sort by any key in the dictionary
    return person["email"]

people.sort(key = foo)
print(people)


# => Solution 2, using lambda
people.sort(key = lambda person: person["age"])
print(people)