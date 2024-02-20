-- CISC 360 a2, Fall 2023
-- Jana Dunfield

-- See a2.pdf for instructions

module A2 where
import Data.Char

-- Rename this file to include your student ID: a2-studentid.hs
-- Also, add your student ID number after the "=":
student_id :: Integer
student_id = 

{- If you are working in a group of 2, uncomment the line below and add the second student's ID number: -}
-- second_student_id =
{- If you are working in a group of 2, uncomment the line above. -}


-- THIS FILE WILL NOT COMPILE UNTIL YOU ADD YOUR STUDENT ID ABOVE
check_that_you_added_your_student_ID_above = ()



{-
   Q1: rewrite
   See a2.pdf for instructions.
-}
divisible_by :: Int -> Char -> Bool
divisible_by factor ch = (mod (ord ch) factor == 0)

rewrite :: (Char -> Bool) -> String -> String
rewrite important list = undefined

-- Hint: Pattern-match on the second argument.


test_rewrite1 = (rewrite (divisible_by 2) "") == ""
test_rewrite2 = (rewrite (\x -> x == ' ') "it's a deed" == "it's  a  deed")
test_rewrite3 = (rewrite (divisible_by 2) "CombinatorFest" == "CombbinnattorrFFestt")
test_rewrite = test_rewrite1 && test_rewrite2 && test_rewrite3

{-
  Q2: lists
-}

{-
  Q2a. Fill in the definition of listCompare.
  See a2.pdf for instructions.
-}
listCompare :: [Int] -> [Int] -> [Bool]

listCompare []       []       = undefined
listCompare (x : xs) (y : ys) = undefined
listCompare (x : xs) []       = undefined
listCompare []       (y : ys) = undefined

test_listCompare1 = listCompare [] [] == []
test_listCompare2 = listCompare [0, 2, 4] [3, 2, 0] == [True, False, False]
test_listCompare3 = listCompare [-2, -5, 0] [-6, 2, 0] == [False, True, False]
test_listCompare4 = listCompare [5, 4, 3, 2] [2, 9] == [False, True, False, False]
test_listCompare5 = listCompare [1, 0] [1, 1, 1, 1] == [False, True, False, False]

test_listCompare = test_listCompare1 && test_listCompare2 && test_listCompare3 && test_listCompare4
                && test_listCompare5


{-
  Q2b. Fill in the definition of genCompare ("generic Compare").
  See a2.pdf for instructions.
-}
genCompare :: (a -> a -> Bool) -> [a] -> [a] -> [Bool]
genCompare cmp []       []       = undefined
genCompare cmp (x : xs) (y : ys) = undefined
genCompare cmp (x : xs) []       = undefined
genCompare cmp []       (y : ys) = undefined

test_genCompare1 = genCompare (\i -> \j -> i < j) [1, 2, 4] [3, 2, 0]
                   == [True, False, False]

-- whoever calls genCompare gets to define what "less than" means:
--  in test_genCompare2, the definition of "less than" is "shorter list"
shorter :: [a] -> [a] -> Bool
shorter xs ys = (length xs < length ys)
test_genCompare2 = genCompare shorter ["a",   "ab",  "abcd", ""            ]
                                      ["ccc", "xy",  "",     "S combinator"]
                                   == [True,  False, False,  True]

test_genCompare = test_genCompare1 && test_genCompare2

{- Q2c. Briefly explain why almostListCompare does *not*
   fully implement the specification of listCompare. -}
almostListCompare :: [Int] -> [Int] -> [Bool]
almostListCompare = zipWith (<)
{- 
Write your explanation here:



-}


{-
  Q3. Songs
-}

data Song = Harmony Song Song
          | Atom String
          deriving (Show, Eq)    -- writing Eq here lets us use == to compare Songs
          
{-
  Q3a. sing: See a2.pdf for complete instructions.

  Hint: You may be able to simplify your code by writing a helper function.
-}

sing :: Song -> Song

-- (replace this line with your clauses)

sing other = other      -- (you're allowed to change this line if you need to)



ascend = Harmony (Harmony (Atom "s0") (Atom "k1")) (Atom "k2")

test_sing1 = (sing (Harmony ascend (Atom "k3")))
              == Harmony (Harmony (Atom "k1") (Atom "k3"))
                         (Harmony (Atom "k2") (Atom "k3"))
                         
test_sing2 = sing (sing (Harmony (Harmony (Atom "k1") (Atom "k"))
                                 (Harmony (Atom "k2") (Atom "k"))))
              == Atom "k"

test_sing3 = (sing ascend) == ascend

test_sing4 = sing (Harmony (Atom "s?") (Harmony ascend (Atom "k0")))
              == Harmony
                   (Atom "s?")
                   (Harmony (Harmony (Atom "k1") (Atom "k0"))
                            (Harmony (Atom "k2") (Atom "k0")))

{-
  Q3b. repeat_sing: See a2.pdf for instructions.
-}

repeat_sing :: Song -> Song
repeat_sing s = undefined

test_repeat1 = repeat_sing (Harmony ascend (Atom "z")) == Atom "z"



{-
  Q3c.  BONUS: See a2.tex.
  This question might not have an answer, and is not worth very much,
  so don't attempt it unless you really want to.
  
  Your solution must not be infinite, that is, it must not be self-referential
  or recursive.
-}
diverging_song :: Song
diverging_song = undefined
