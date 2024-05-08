---
date: 2024-04-10 01:33
slug: python猜数字游戏源码

---

这是python猜数字游戏的源代码，非常加单。可以学习。

``` python
import random

print("Welcome to the guessing game!")

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)

while True:
    # Get a guess from the player
    guess = int(input("Enter a number between 1 and 100: "))

    # Check if the guess is correct
    if guess == secret_number:
        print("You guessed it! The secret number was {}".format(secret_number))
        break
    elif guess < secret_number:
        print("Your guess is too low")
    else:
        print("Your guess is too high")

```





<!-- truncate -->
