package com.moabdelnaby.internapi;

import javax.persistence.*;

@Entity
@Table(name="Items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;

    public Item(Integer id, String name)
    {
        this.name = name;
        this.id = id;
    }

    public Item() {

    }

    public String getName()
    {
        return this.name;
    }

    public Integer getId()
    {
        return this.id;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
