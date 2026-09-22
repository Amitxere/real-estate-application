package com.realestate.property.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "properties")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String propertyType;
    @Column(nullable = false)
    private String listingType;
    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal price;

    private Integer bedrooms;
    private Integer bathrooms;
    private Double area;
    private Integer floors;
    private Boolean parking;
    private String furnishing;

    private String address;
    private String city;
    private String state;
    private String country;
    private Double latitude;
    private Double longitude;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PropertyStatus status;

    private Long ownerId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        if (status == null){
            status = PropertyStatus.DRAFT;
        }
    }
    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

}
