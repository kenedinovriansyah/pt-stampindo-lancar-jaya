range_ = range(1,101)
array = []
range_3 = 3

for i in range_:
    if not i % 3:
        array.append('boleh')
    elif not i % 5:
        array.append('boleh')
    else:
        array.append(i)

print(array)