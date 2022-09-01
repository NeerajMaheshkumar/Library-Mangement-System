package com.demo.LMS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.LMS.model.BookModel;
import com.demo.LMS.repository.BookRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/LMS")

public class BookController
{
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("/Books") 
	public String getbooks() 
	{
		 return "Hi LMS";
	}
		 
	
	@GetMapping("/Bookslist") 
	public List<BookModel> getAllBooks() throws Exception
	{
		return bookRepository.findAll();		
	}
	
	@PostMapping("/SaveBook")
    public BookModel createBook(@RequestBody BookModel bookModel)
	{
		
        return bookRepository.save(bookModel);
    }
	
	@GetMapping("/books/{ID}")
	public ResponseEntity<BookModel> getbookById(@PathVariable(value = "ID") Long ID)
	throws Exception 
	{
		BookModel book = bookRepository.findById(ID)
				.orElseThrow(() -> new Exception());
		return ResponseEntity.ok().body(book);
	}
	
	@DeleteMapping("/book/{ID}")
	public Map<String, Boolean> deleteBook(@PathVariable(value = "ID") Long ID)
			throws Exception 
	{
		BookModel book = bookRepository.findById(ID)
	.orElseThrow(() -> new Exception());

		bookRepository.delete(book);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	@PutMapping("/Book/{id}")
	public ResponseEntity<BookModel> updatebook(@PathVariable(value = "id") Long ID,
			@Valid @RequestBody BookModel bookDetails) throws Exception
	{
		BookModel book = bookRepository.findById(ID)
				.orElseThrow(() -> new Exception());

		book.setTitle(bookDetails.getTitle());
		book.setDescription(bookDetails.getDescription());
		book.setISBN(bookDetails.getISBN());
		book.setAuthor(bookDetails.getAuthor());
		book.setPublication(bookDetails.getPublication());
		book.setGenre(bookDetails.getGenre());
		book.setLanguage(bookDetails.getLanguage());
		book.setBookFormat(bookDetails.getBookFormat());
		book.setBookCount(bookDetails.getBookCount());
		book.setIsReference(bookDetails.getIsReference());
		final BookModel updatedBook = bookRepository.save(book);
		return ResponseEntity.ok(updatedBook);
	}
}
