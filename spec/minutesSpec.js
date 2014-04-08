describe('Minutes test suite', function(){
    it('Should add 10 minutes to 9:30 AM', function(){
        expect(addMinutes("9:30 AM", 10)).toBe("9:40 AM")
    })
    it('Should add 60 minutes to 9:30 AM', function(){
        expect(addMinutes("9:30 AM", 60)).toBe("10:30 AM")
    })
    it('Should add 120 minutes to 9:30 AM', function(){
        expect(addMinutes("9:30 AM", 120)).toBe("11:30 AM")
    })
    it('Should add 50 minutes to 11:30 AM', function(){
        expect(addMinutes("11:30 AM", 50)).toBe("12:20 PM")
    })
    it('Should add 20 minutes to 11:50 PM', function(){
        expect(addMinutes("11:50 PM", 20)).toBe("12:10 AM")
    })
})
