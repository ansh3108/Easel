import { EaselError } from "./stdlib";

export const TOKENS = {
    LeftParen: 'LeftParen',
    RightParen: 'RightParen',
    LeftBrace: 'LeftBrace',
    RightBrace: 'RightBrace',
    LeftBracket: 'LeftBracket',
    RightBracket: 'RightBracket',
    Period: 'Period',
    Comma: 'Comma',
    Colon: 'Colon',
    Keyword: 'Keyword',
    Identifier: 'Identifier',
    String:'String',
    Number: 'Number',
    Or: 'Or',
    Not: 'Not',
    Equiv: 'Equiv',
    NotEquiv: 'NotEquiv',
    Gt: 'Gt',
    Gte: 'Gte',
    Lt: 'Lt',
    Lte: 'Lte',
    Plus: 'Plus',
    Minus: 'Minus',
    Asterisk: 'Asterisk',
    Slash: 'Slash',
    EOF: 'EOF',
}

export class Token {
    constructor(type, lexeme, literal, line) {
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
    }

    toString() {
        return this.value
    }

    class Lexer{
        
        scanToken(){
            const char = this.advance()

            switch (char) {
                case '(':
                    return new Token(TOKENS.LeftParen, '(', this.line, this.column);
                case ')':
                    return new Token(TOKENS.RightParen, ')', this.line, this.column);
                case '{':
                    return new Token(TOKENS.LeftBrace, '{', this.line, this.column);
                case '}':
                    return new Token(TOKENS.RightBrace, '}', this.line, this.column);
                case '[':
                    return new Token(TOKENS.LeftBracket, '[', this.line, this.column);
                case ']':
                    return new Token(TOKENS.RightBracket, ']', this.line, this.column);
                case '[':
                    return new Token(TOKENS.LeftBracket, '[', this.line, this.column);
                case ']':
                    return new Token(TOKENS.RightBracket, ']', this.line, this.column);
                case '.':
                    return new Token(TOKENS.Period, '.', this.line, this.column);
                case ',':
                    return new Token(TOKENS.Comma, ',', this.line, this.column);
                case ':':
                    return new Token(TOKENS.Colon, ':', this.line, this.column);
                case '+':
                    return new Token(TOKENS.Plus, '+', this.line, this.column);
                case '-':
                    return new Token(TOKENS.Minus, '-', this.line, this.column);
                case '*':
                    return new Token(TOKENS.Asterisk, '*', this.line, this.column);
                case '/':
                    return new Token(TOKENS.Slash, '/', this.line, this.column);
            }
        }
   }
}


        peek(){
            if(this.current >= this.program.length) return '\0'
            return this.program[this.current]
        }
        scanTokens(){
            while(this.peek() !== '\0')this.scanToken()
            this.tokens.push(new Token(TOKENS.EOF, null, this.line, this.column))
            return this.tokens
        }
        advance(){
            if(this.current >= this.program.length) return '\0'
            this.column++
            return this.program[this.current++]
        }
    

    export class Lexer{
        constructor(program){
            this.program = program;
            this.token = []
            this.currentToken = 0;
            this.line = 1;
            this.column = 0;
        }

        error(msg){
            throw new EaselError('Error on ${this.line}:${this.column}: ${msg}');
        }
    }

