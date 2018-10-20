import System.IO

factorial :: Int -> Int
factorial 0 = 1
factorial x = x * factorial (x-1)

main = putStrLn $ show $ factorial 10