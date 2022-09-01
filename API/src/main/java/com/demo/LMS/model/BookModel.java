package com.demo.LMS.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_Books")
public class BookModel 
{
	private long id;
	private String BookCode;
	private String Title;
	private String Description;
	private long ISBN;
	private String Author;
	private String Publication;
	private String Genre;
	private String Language;
	private String BookFormat;
	private int BookCount;
	private String isReference;
	
	public BookModel() {}
	
	public  BookModel(String BookCode, String Title, String Description, long ISBN,String Author,String Publication, String Genre, String Language, String BookFormat, int BookCount, String isReference ) {
		this.BookCode = BookCode;
		this.Title = Title;
		this.Description = Description;
		this.ISBN = ISBN;
		this.Author = Author;
		this.Publication= Publication;
		this.Genre=Genre;
		this.Language=Language;
		this.BookFormat=BookFormat;
		this.BookCount=BookCount;
		this.isReference=isReference;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "BOOKCODE", nullable = false)
	public String getBookCode() {
		return BookCode;
	}

	public void setBookCode(String bookCode) {
		this.BookCode = bookCode;
	}
	
	@Column(name = "TITLE", nullable = false)
	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		this.Title = title;
	}

	@Column(name = "DESCRIPTION", nullable = false)
	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		this.Description = description;
	}

	@Column(name = "ISBNCODE", nullable = false)
	public long getISBN() {
		return ISBN;
	}

	public void setISBN(long ISBN) {
		this.ISBN = ISBN;
	}

	@Column(name = "AUTHOR", nullable = false)
	public String getAuthor() {
		return Author;
	}

	public void setAuthor(String author) {
		this.Author = author;
	}

	@Column(name = "PUBLICATION", nullable = false)
	public String getPublication() {
		return Publication;
	}

	public void setPublication(String publication) {
		this.Publication = publication;
	}

	@Column(name = "GENRE", nullable = false)
	public String getGenre() {
		return Genre;
	}

	public void setGenre(String genre) {
		this.Genre = genre;
	}

	@Column(name = "LANGUAGE", nullable = false)
	public String getLanguage() {
		return Language;
	}

	public void setLanguage(String language) {
		this.Language = language;
	}

	@Column(name = "BOOKFORMAT", nullable = false)
	public String getBookFormat() {
		return BookFormat;
	}

	public void setBookFormat(String bookFormat) {
		this.BookFormat = bookFormat;
	}

	@Column(name = "BOOKCOUNT", nullable = false)
	public int getBookCount() {
		return BookCount;
	}

	public void setBookCount(int bookCount) {
		this.BookCount = bookCount;
	}

	@Column(name = "ISREFERENCE", nullable = false)
	public String getIsReference() {
		return isReference;
	}

	public void setIsReference(String isReference) {
		this.isReference = isReference;
	}
	
	
	

	@Override
	public String toString() 
	{
		return "Book[Book Code=" + BookCode + ", Title=" + Title + ", Description=" + Description + ", ISBN=" + ISBN
				+ ", Author=" + Author + "Publication =" + Publication + ", Genre = " + Genre + ",Language = " + Language +", BookFormat = " + BookFormat +", BookCount=" + BookCount + ", isReference =" + isReference +"]";
	}
	
}
