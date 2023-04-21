# def remove_duplicate_words_from(sentence):
#     words = sentence.split(" ")
#     emptyArray = []
#     for item in words:
#         if (item not in emptyArray):
#             emptyArray.append(item)

#     return " ".join(emptyArray)


# def remove_duplicate_words_from(sentence):
#     words = sentence.split(" ")
#     uniqueKeys = list(dict.fromkeys(words))
#     return " ".join(uniqueKeys)

def remove_duplicate_words_from(sentence):
    return " ".join(dict.fromkeys(list(sentence.split(" "))))


# Testing Ouput
print(remove_duplicate_words_from("Hello Elzero Web Web Hello School"))
# Hello Elzero Web Scho
